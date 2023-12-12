import React, { useEffect, useState } from 'react' 
import { Col, Container, Row } from 'react-bootstrap'; 
import Card from 'react-bootstrap/Card';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Products = () => {
    const [data, setData] = useState([]); 
    const isAuthenticated = useSelector(state => state.isAuthenticated);
    const navigate = useNavigate();
    
    if(!isAuthenticated){ 
        navigate("/login")
    }
    const fetchData = async ()=>{
     api.get("/product").then(resp => { 
            setData(resp.data.result); 
        }) 
        // let temp = await chunkArray(resp.data.result.products);
         
       

    }
    useEffect(() => {
      
        fetchData(); 
        
    },[])
    useEffect(() => {
        console.log(data);
    })
    return (
        <Container>
            {
               data.map((m, i) => {
                return (
                    <div key={`row-${i}`}>
                        <Row className="justify-content-md-center">
                            {m.map((d,index) => {
                             return (
                                <>
                            <Col sm key={`col-${index}`}>
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