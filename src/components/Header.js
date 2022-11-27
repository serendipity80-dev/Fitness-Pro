import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


const Header = () => {
    return (
        <header>
        <Navbar bg="danger" variant='dark' expand="lg" collapseOnSelect>
        <Container>
            <LinkContainer to={`/`}>
          <Navbar.Brand >Fitness Pro</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <LinkContainer to={`/program`}>
              <Nav.Link> <i className='fa-solid fa-person-running'></i>Program</Nav.Link>
              </LinkContainer>
              <LinkContainer to={`/login`}>
              <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
    )
}

export default Header
