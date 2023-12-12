import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function Toaster({data, show, onClose}) {  

  return (
    <Row>
    <Col md={6} className="mb-2">
    
      <Toast show={show} onClose={onClose} animation={true} bg={data.type=='error'?"danger":"success"}>
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">{data.type=='error'?"Error":"Success"}</strong>
          
        </Toast.Header>
        <Toast.Body>{data.message}</Toast.Body>
      </Toast>
    </Col>
   
  </Row>
  );
}

export default Toaster;