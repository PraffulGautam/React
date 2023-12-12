import React, { useEffect, useState } from 'react' 
import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap' 
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../../services/action';

export const Header = () => {
    // const {token} = useToken(); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [resp, setResp] = useState({message:"", type:""})  

  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const toggleToast = () => {
    setShowToast(!showToast);
  };

 console.log(isAuthenticated)
  const handleLogout = () => {
    dispatch(logout());
    setResp({message: "Logout Success", type: "success"}) 
    toggleToast();
  setTimeout(()=>{
    navigate("/login")
  },1000)

  };
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
          {isAuthenticated?<NavLink to="/products" className="nav-link">Products</NavLink>:""}

            {!isAuthenticated?<NavLink to="/login" className="nav-link">Login</NavLink>:""}
            {!isAuthenticated?<NavLink to="/signup" className="nav-link">Signup</NavLink>:""}
            {isAuthenticated?<NavLink className="nav-link" onClick={handleLogout}>Logout</NavLink>:""}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
      );
    }

export default Header;