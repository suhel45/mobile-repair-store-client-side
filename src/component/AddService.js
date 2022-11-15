/** @format */

import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import UseTitle from "./Hook/UseTitle";

const AddService = () => {
  UseTitle('AddService')
    const hadleSubmit = ()=>{
       alert("successfully Added");
    }
  return (
    <div className="container">
      <h3>Add Service</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Service Name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" required>
          <Form.Control type="text" placeholder="Service Price" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Mobile Number" required />
        </Form.Group>
        <Button onClick={hadleSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddService;
