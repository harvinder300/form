import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

function TopNavBar() {
  return (
    <Card >
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#regulatory">Regulatory & Compliance</Nav.Link>
              <Nav.Link href="#news">News & Media</Nav.Link>
              <Nav.Link href="#tender">Tender</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Card>
  );
}

export default TopNavBar;
