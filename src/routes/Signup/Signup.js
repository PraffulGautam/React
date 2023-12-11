import React, { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


export const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const formRef = useRef(null);
    
   const resetInput =() => {
    setName("");
    setEmail("");
    setPassword("");

   }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email, password);
        axios.post("http://localhost:4000/user/signup", {name, email, password})
           .then(res => {
            console.log(res); 
            resetInput();
            alert(res.data.msg)
           }) 
           .catch(err => {
            console.log(err);
            alert(err.response.data.msg)
           })
      }
      return (
        <div>
            <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={name} onChange={e => {setName(e.target.value)}}/>
              </Form.Group>
        
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

export default Signup;