import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";
import {useNavigate} from "react-router-dom";

export const Navigation = () => {
  let navigate = useNavigate();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Gen.G</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => {
            navigate('/')
          }}>Home</Nav.Link>
          <Nav.Link onClick={() => {
            navigate('/player')
          }}>Player</Nav.Link>
          <Nav.Link onClick={()=>navigate('/detail')}>Detail</Nav.Link>
          <Nav.Link href="record">Record</Nav.Link>

        </Nav>
      </Container>
    </Navbar>
  );
}
export default Navigation;