/** @format */

import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./UserContext";

const ServicesDetailsPage = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [comt, setComt] = useState([]);
  const [loading,setLoading] = useState(false);
  const data = useLoaderData();
  const { _id, name, img, price, description } = data;
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);
  const handleClick = (event) => {
    event.preventDefault();
    const form = event.target;
    const cmt = form.name.value;
    setLoading(true)
    const id = _id;
    const comment = { cmt, id };
    form.reset();
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        const newUser = [...users, data];
        setUsers(newUser);
        form.reset();
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    fetch(`http://localhost:5000/comment/${_id}`)
      .then((res) => res.json())
      .then((data) => setComt(data));
  }, [!loading]);
  console.log(user)
  return (
    <div className="row container ">
      <div className="col col-lg-2"></div>
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
      <div className="col col-lg-3">
        <>
          {user?.uid ? (
            <>
              <div>
                <p>Add review</p>
                <form onSubmit={handleClick}>
                  <input
                    type="text"
                    name="name"
                    className="mb-1 "
                    style={{ height: "4rem" }}
                  />
                  <button  type="submit">Add</button>
                </form>
                <div>
                    {
                      comt.map(c=><p className="d-flex  align-items-center">
                         <img className=" rounded-pill me-1" style={{height:"30px",weight:"30px"}} src={user.photoURL} alt="" />
                        {c.cmt}
                        </p>)
                    }
                </div>
              </div>
            </>
          ) : (
            <p>
              Please <Link to="/login">Login</Link>to add Review
            </p>
          )}
        </>
      </div>
    </div>
  );
};

export default ServicesDetailsPage;
