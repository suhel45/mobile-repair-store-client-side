import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ShowDetails = ({data}) => {
    const {name,img,price,description} = data;
    return (
      <div className="col col-lg-4 mt-3">
        <Card style={{ width: "22rem" , height:"30rem" }}>
          <Card.Img variant="top" src={img} alt="" style={{height:"12rem"}}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <h3 className='' >price:<span style={{color:"blue"}}>{price}</span></h3>
            <Button variant="primary">view Details</Button>
          </Card.Body>
        </Card>
      </div>
    );
};

export default ShowDetails;