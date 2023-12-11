import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'; 
import UseToken from '../../services/useToken';
import { Navigate } from 'react-router-dom';
import {useAuth} from '../../services/authContext';

export const Login = () => {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const {token, setToken} = UseToken();

  
 const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    axios.post("http://localhost:4000/user/signin", {email, password})
       .then(res => {
        console.log(res); 
        alert('login Success')
        // localStorage.setItem("token", res.data.token);
        setToken({token: res.data.token});
        <Navigate to="/products"/>   

       }) 
       .catch(err => {
        console.log(err);
        alert(err.response.data.msg)
       })
  }
  return (
    <div>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => {setEmail(e.target.value)}}/>
           
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={e => {setPassword(e.target.value)}}/>
          </Form.Group>
 
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
      );
    }

export default Login;