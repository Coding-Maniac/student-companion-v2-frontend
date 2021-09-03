import React, { FC } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const AppNavbar: FC<{}> = () => {
  console.log('hello');
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#"> SC </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Attendance</Nav.Link>
          <Nav.Link href="#charts">Attendance Charts</Nav.Link>
          <Nav.Link href="#grades">Grades</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
