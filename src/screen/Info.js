import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

const Info = () => {
  return (
    <Container>
        <h1 className='text-danger p-3 m-5 '><strong>How We Can Help</strong></h1>
        <p className='lead text-center'>Experience the power of the pack. We offer signature classes that can only be found at Equinox—plus classes across 11 categories, including HIIT, Long + Lean, Cycling, Yoga, Running, Dance, and more.</p>
        <Row>
            <Col lg={4} md={4} className='p-3 my-3 '>
                <h2 className='text-danger'><strong>cycling</strong></h2>
                <p className='lead'>Sample text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, saepe?</p>
               <a href='#' className='text-danger'> <i class="fa-solid fa-circle-chevron-right fa-2x"></i></a>
            </Col>
            <Col lg={4} md={4} className='p-3 my-3 '>
                <h2 className='text-danger'><strong>running</strong></h2>
                <p className='lead'>Sample text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, saepe?</p>
               <a href='#' className='text-danger'> <i class="fa-solid fa-circle-chevron-right fa-2x"></i></a>
            </Col>
            <Col lg={4} md={4} className='p-3 my-3 '>
                <h2 className='text-danger'><strong>dance class</strong></h2>
                <p className='lead'>Sample text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, saepe?</p>
               <a href='#' className='text-danger'> <i class="fa-solid fa-circle-chevron-right fa-2x"></i></a>
            </Col>
        </Row>

        <Row>
            <Col lg={4} md={4}  className='p-3 my-3 '>
                <h2 className='text-danger'><strong>fitness</strong></h2>
                <p className='lead'>Sample text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, saepe?</p>
               <a href='#' className='text-danger'> <i class="fa-solid fa-circle-chevron-right fa-2x"></i></a>
            </Col>
            <Col lg={4} md={4}  className='p-3 my-3 '>
                <h2 className='text-danger'><strong>pilates</strong></h2>
                <p className='lead'>Sample text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, saepe?</p>
               <a href='#' className='text-danger'> <i class="fa-solid fa-circle-chevron-right fa-2x"></i></a>
            </Col>
            <Col lg={4} md={4}  className='p-3 my-3 '>
                <h2 className='text-danger'><strong>weight loss</strong></h2>
                <p className='lead'>Sample text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, saepe?</p>
               <a href='#' className='text-danger'> <i class="fa-solid fa-circle-chevron-right fa-2x"></i></a>
            </Col>
        </Row>
    </Container>
  )
}

export default Info