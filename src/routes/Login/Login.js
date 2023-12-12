import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate, useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import {login} from '../../services/action';
import Toaster from '../../components/toast/toast';
import { ToastContainer } from 'react-bootstrap';

export const loginSuccess = (token) => ({
  type: 'LOGIN_SUCCESS',
  payload: { token },
});

export const Login = () => {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resp, setResp] = useState({message:"", type:""})  
  const [showToast, setShowToast] = useState(false);
  const toggleToast = () => {
    setShowToast(!showToast);
  };

  const dispatch = useDispatch();
 const navigate = useNavigate();
 const showToaster = () => {
  toggleToast() 

 }
 const submitHandler = (e) => {
    e.preventDefault(); 
    dispatch(login({email, password, setResp}));
    setResp({message: "Login Success", type: "success"}) 
    toggleToast();
    setTimeout(() => {
      navigate("/products")
    },2000)
  }
  return (
    <div>
           <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
       <Toaster data={resp} show={showToast} onClose={toggleToast}/>
      </ToastContainer>
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