import React, { useState } from 'react' 
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Home = () => {

  return (
    <div>
       <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" style={{textDecoration: 'none', color: 'inherit'}}>Home</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
            <NavLink to="/products" className="nav-link">Products</NavLink>
            <NavLink to="/login" className="nav-link">Login</NavLink>
            <NavLink to="/signup" className="nav-link">Signup</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
      );
    }

export default Home;