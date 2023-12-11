import React, { useEffect, useState } from 'react' 
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap'
import useToken from '../../services/useToken';
import {useAuth} from '../../services/authContext';

export const Header = () => {
    // const {token} = useToken(); 
    const { token, logout } = useAuth();

    console.log(token)
    useEffect(() => {

    },[token])
    const handleLogout = () => {
         logout();   
        <Navigate to="/login"/>   

    }
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

            {!token?<NavLink to="/login" className="nav-link">Login</NavLink>:""}
            {!token?<NavLink to="/signup" className="nav-link">Signup</NavLink>:""}
            {token?<NavLink className="nav-link" onClick={handleLogout}>Logout</NavLink>:""}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
      );
    }

export default Header;