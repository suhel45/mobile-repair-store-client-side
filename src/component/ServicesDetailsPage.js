/** @format */

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";

const ServicesDetailsPage = () => {
  const data = useLoaderData();
  const { name, img, price, description } = data;
  console.log(data);
  return (
    <div className="d-flex flex-row align-items-center justify-content-center">
      <Card style={{ width: "40rem", height: "48rem" }}>
        <Card.Img variant="top" src={img} alt="" style={{ height: "20rem" }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <h3>
            price:<span style={{ color: "blue"}}>{price}</span>
          </h3>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServicesDetailsPage;
