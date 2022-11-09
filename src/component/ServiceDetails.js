/** @format */

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ServiceDetails = ({data}) => {
    const {_id,name,img,price,description} = data;
  return (
    <div className="col col-lg-4">
      <Card style={{ width: "22rem",height:"30rem" }}>
        <Card.Img variant="top" src={img} alt="" style={{height:"12rem"}}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to={`/service/${_id}`}>
          <Button variant="primary">view Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetails;
