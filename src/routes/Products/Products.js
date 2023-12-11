import React, { useEffect, useState } from 'react'
import useToken from '../../services/useToken';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Products = () => {
    const [data, setData] = useState([]);
    const {token} = useToken();  

    const chunkArray = (array) => {

        
    }
    const fetchData = async ()=>{
     axios.get("http://localhost:4000/product", {   
            headers: {
                Authorization: `Bearer ${token}`
            }    
        }).then(resp => {
            console.log(resp.data.result);
            setData(resp.data.result); 
        }) 
        // let temp = await chunkArray(resp.data.result.products);
         
       

    }
    useEffect(() => {
      
        fetchData();
        console.log(data);
        
    },[])
    useEffect(() => {
        console.log(data);
    })
    return (
        <Container>
            {
               data.map((m, i) => {
                return (
                    <div key={i}>
                        <Row className="justify-content-md-center">
                            {m.map((d,index) => {
                             return (
                                <>
                            <Col sm key={index}>
                            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={d.thumbnail} height="100px" />
      <Card.Body>
        <Card.Title>{d.brand}</Card.Title>
        <Card.Text>
          <small>{d.description}</small> 
          <small>Discount: {d.discountPercentage}</small>
          <br/>
          <small>Category: {d.category}</small>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
                            </Col>

                                </>
                             )   
                            })}
                            
                            
                        </Row>
                    </div>
                )
               })
            }
        
      </Container>
    )
}

export default Products;