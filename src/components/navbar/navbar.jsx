import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/img/ewsubl.png'

function navbar() {
  return (
    <>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><img src={logo} height="85" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default navbar;