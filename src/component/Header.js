/** @format */

import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "./UserContext";

const Header = () => {
  const {user} = useContext(AuthContext);
  console.log(user)
  return (
    <div className="mb-5">
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Mobile repair</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/home'>Home</Nav.Link>
              <Nav.Link as={Link} to='/service'>Services</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              {
                user?.uid && 
                <>
                <Nav.Link as={Link} to="/review">My Review</Nav.Link>
                <Nav.Link as={Link} to="/addService">Add Service</Nav.Link>
                <Nav.Link as={Link} to="/login">LogOut</Nav.Link>
                </>

              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
