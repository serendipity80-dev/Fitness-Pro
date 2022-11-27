import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const ContactScreen = () => {
  return (
    <Container>
<Row className='align-items-center'>
    <Col className='p-3 my-3' xl={6} lg={8} md={6} xs={12} >
        <h3 className='text-danger'><strong> Learn more <br/>about our <br/> fitness pro club</strong></h3>
    </Col>

    <Col>
    
    <Form bg="light" className='p-3 my-3'>
        <h3 className='text-danger'>Contact Us</h3>
    <Form.Group controlId='name' className='p-3'>
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control 
              type='name' 
              placeholder='Enter Name'
            //    onChange={(e) => setEmail(e.target.value)}
               ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'className='p-3'>
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control 
              type='password' 
              placeholder='Password'
            //    onChange={(e) => setEmail(e.target.value)}
               ></Form.Control>
          </Form.Group>

          <Form.Group controlId='message' className='p-3'>
              {/* <Form.Label>Message</Form.Label> */}
              <Form.Control 
              type='textarea' 
              placeholder='Enter Your Message Here'
            //    onChange={(e) => setEmail(e.target.value)}
               ></Form.Control>
          </Form.Group>
          <Button type='button' className='btn btn-outline-danger'>SEND</Button>
    </Form>
    </Col>
</Row>

    </Container>
  )
}

export default ContactScreen