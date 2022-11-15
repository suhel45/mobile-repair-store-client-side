/** @format */

import React from "react";
import Accordion from "react-bootstrap/Accordion";
import UseTitle from "./Hook/UseTitle";

const Blog = () => {
  UseTitle('Blog')
  return (
    <div className="container">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Difference between SQL and NoSQL</Accordion.Header>
          <Accordion.Body>
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What is JWT, and how does it work?
          </Accordion.Header>
          <Accordion.Body>
            SON Web Token (JWT) is an open standard (RFC 7519) that defines a
            compact and self-contained way for securely transmitting information
            between parties as a JSON object. This information can be verified
            and trusted because it is digitally signed. JWTs can be signed using
            a secret (with the HMAC algorithm) or a public/private key pair
            using RSA or ECDSA.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
          What is the difference between javascript and NodeJS?
          </Accordion.Header>
          <Accordion.Body>
          JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
          How does NodeJS handle multiple requests at the same time?
          </Accordion.Header>
          <Accordion.Body>
          How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
