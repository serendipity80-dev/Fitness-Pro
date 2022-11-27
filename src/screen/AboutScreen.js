import React from 'react'
import { Container, Carousel, Row, Col, Image, Button } from 'react-bootstrap'

const AboutScreen = () => {
  return (
    <Container>
        <Row className='align-items-center'>
            <Col md={6} className='p-3 my-3'>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/sule.jpg"
      alt="First slide"
    />
          </Carousel.Item>
          <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/sven.jpg"
      alt="First slide"
    />
          </Carousel.Item>
          <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/cathy.jpg"
      alt="First slide"
    />
          </Carousel.Item>
          </Carousel>
            </Col>
            <Col md={6} className='p-5 my-5'>
                <h1 className='text-danger'><strong> about club</strong></h1>
                <p>Sample text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officia vero sunt quia eveniet error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officia vero sunt quia eveniet error.</p>
                <Button type='button' className='btn btn-outline-danger'>LEARN MORE</Button>
            </Col>
        </Row>
        <Row className='align-items-center'>
            <Col md={4}className='p-3 my-3'>
            <h3 className='text-danger'><strong>Run smarter,<br/>hurt less</strong></h3> 
            </Col>
            <Col>
            <p className='lead'>Paragraph.Sample text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officia vero sunt quia eveniet error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officia vero sunt quia eveniet error.</p>
            </Col>
        </Row>
        <Row className='align-items-center'>
            <Col lg={3} md={4} className='p-3'>
            <Image src='/images/09.jpg' fluid rounded/></Col>
            <Col lg={3} md={4} className='p-3 my-2'><Image src='/images/08.jpg' fluid rounded/></Col> 
           <Col lg={3} md={4} className=' p-3 my-2'><Image src='/images/07.jpg' fluid rounded/></Col> 
            <Col lg={3} md={4} className='p-3'><Image src='/images/06.jpg' fluid rounded/></Col>

            
        </Row>
    </Container>
  )
}

export default AboutScreen