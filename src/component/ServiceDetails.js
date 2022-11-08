/** @format */

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ServiceDetails = ({data}) => {
    const {name,img,price,description} = data;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} alt=""/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetails;
