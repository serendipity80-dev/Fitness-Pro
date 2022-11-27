import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import {Slide} from 'react-reveal'

const ProClasses = () => {
  return (
    <Container className='p-3 my-4'>
        <h1 className='text-danger my-3'>Fitness Pro Training</h1>
        <Slide left>

        <Row>
         
            <Col lg={6} md={8} sm={12}>
                <Image src='/images/04.jpg' className='classes-img' fluid/>
            </Col>
          <div className='mask'></div>
                   
              <Col lg={4} md={6} sm={12} className=' m-2'>
              
                <Image src='/images/06.jpg' className='classes-img' fluid/>
                
<Col className='p-3 my-3'>Sample text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officia vero sunt quia eveniet error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officia vero sunt quia eveniet error.</Col>
</Col>   

           

        </Row>
</Slide>

    </Container>
  )
}

export default ProClasses