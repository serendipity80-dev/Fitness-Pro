import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
// import image1 from '/images/01.jpg'
// import image2 from '/images/02.jpg'

const Plan = () => {
  return (
    <Container>
<Row>
    <Col lg={4} md={4} className='p-4 my-4 ms-2 '>
      
    <i className="fa-solid fa-quote-left fa-4x "></i>
  Sample text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officia vero sunt quia eveniet error.Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officia vero sunt quia eveniet error.
 
  <Col style={{fontSize:"1.5rem",fontWeight:"bold"}}>  -Jane Doe </Col>
 <Col style={{fontSize:"1.5rem", fontWeight:"bold"}}> Instructor</Col>
    </Col>
    <Col  md={6} sm={12} className='p-3 ms-2 '> 
    <Image src='/images/01.jpg' className='plan-img' fluid rounded/> 
    </Col>
    </Row>

    <Row>
    <Col md={6} sm={12} className='my-3'>
    <Image  src='/images/02.jpg' className='plan-image' fluid rounded/>
    </Col>
    <Col md={6} className='p-4 my-5 '>
    <h2 className='text-danger'>Weight Loss && Diet Plan</h2> 
    Sample text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officia vero sunt quia eveniet error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officia vero sunt quia eveniet error.
    <Col>
    <a href='#' className='p-3 text-danger'>LEARN MORE</a>
    </Col>
    </Col>

    </Row>
  

    </Container>
  )
}

export default Plan