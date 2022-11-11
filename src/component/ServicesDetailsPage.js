/** @format */

import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./UserContext";

const ServicesDetailsPage = () => {
  const {user} = useContext(AuthContext);
  const [users,setUsers] = useState([])
  const [comt,setComt] = useState([]);
  const data = useLoaderData();
  const {_id, name, img, price, description } = data;
  console.log(data);

  console.log(user)
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
   },[users])
  const handleClick = (event)=>{
    event.preventDefault();
    const form = event.target;
    const cmt = form.name.value;
    const id = _id;
    const comment = {cmt,id}
    form.reset();
    fetch('http://localhost:5000/users',{
  method:'POST',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(comment,)
})
.then(res=>res.json())
.then(data=>{
  const newUser = [...users,data];
  setUsers(newUser)
  console.log(newUser)
  form.reset();
})
.catch(e=>console.log(e))
  }
  useEffect(()=>{
    fetch('http://localhost:5000/comment/636ac0784885c740289f5484')
    .then(res=>res.json())
    .then(data=>setComt(data))
  },[])
  console.log(comt);
  return (
    <div className="row container ">
      <div className="col col-lg-3">

      </div>
      <div className=" col col-lg-7 container">
        <Card style={{ width: "40rem", height: "48rem" }}>
          <Card.Img
            variant="top"
            src={img}
            alt=""
            style={{ height: "20rem" }}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <h3>
              price:<span style={{ color: "blue" }}>{price}</span>
            </h3>
          </Card.Body>
        </Card>
      </div>
      <div className="col col-lg-2">
        {
          !user?.uid && 
            <p>Please <Link to="/login">login</Link>to see review</p>
        }
          <div>
            <p>Add review</p>
            <form onSubmit={handleClick}>
              <input type="text" name="name" className="mb-1 " style={{height:"4rem"}} />
              <button type="submit">Add</button>
            </form>
              <div className="d-flex ms-1">
                <img className="rounded-pill w-25 h-25" src={user?.photoURL} alt="" />
                <p>{comt.cmt}</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ServicesDetailsPage;
