import React from 'react'
import { Container, Card, Image, Row, Col, Button } from 'react-bootstrap'
import Plan from './Plan'
import ProClasses from './ProClasses'
import Info from './Info'
import CarouselContainer from './CarouselContainer'
import AboutScreen from './AboutScreen'
import ContactScreen from './ContactScreen'

const Banner = () => {
  return (
<>
           
        <Container className='my-3'> 
        <figure className='position-relative'>
        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop" className='w-100'>
    <source src="/images/Fitness.mp4" type="video/mp4"/>
  </video>
        {/* <Image src='/images/07.jpg' className='banner-img' fluid rounded/> */}
<figcaption>
      <Row>
          <Col xl={6} lg={8} md={8} xs={12}>
      <Card  bg='danger' className='p-2 d-block text-light'>
          <Card.Title as='h2'> Fitness Pro</Card.Title>
      <Card.Text as='div'>
      Text sample.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, saepe?
      </Card.Text>
      <Card.Text as='p' className='my-2'>Image from <a href='https://unsplash.com/' className='text-light'><em>Unsplash</em> </a></Card.Text>
      <Button type="button" className='btn btn-outline-light' >READ MORE</Button>
      </Card>
      </Col>
      </Row>
      </figcaption>
      </figure>
    </Container>
    <Plan/>
    <ProClasses/>
    <CarouselContainer/>
    <Info/>
    <AboutScreen/>
    <ContactScreen/>
  </>
  )
}

export default Banner