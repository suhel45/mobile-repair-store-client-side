/** @format */

import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddService = () => {
    const hadleSubmit = ()=>{
       alert("successfully Added");
    }
  return (
    <div className="container">
      <h3>Add Service</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Service Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Service Price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Mobile Number" />
        </Form.Group>
        <Button onClick={hadleSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddService;
