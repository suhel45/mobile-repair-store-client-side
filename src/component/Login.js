/** @format */

import React, { useContext } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from "./UserContext";

const Login = () => {
      const {userLogin} = useContext(AuthContext);

    const handleGoogle = ()=>{
        userLogin()
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(e=>console.log(e))
    }
  return (
    <div className="container">
      <h1>login</h1>
      <ListGroup className="container w-50 mt-3">
      <ListGroup.Item className=" text-primary mb-3" action onClick={handleGoogle} ><FaGoogle></FaGoogle> Continue With Google</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Login;
