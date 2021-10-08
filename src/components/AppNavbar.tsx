import React, { FC } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { APP_GRADES_PAGE, APP_LANDING_PAGE } from '../common/Routes';

const AppNavbar: FC<{}> = () => {
  console.log('hello');
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#"> SC </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href={APP_LANDING_PAGE}>Attendance</Nav.Link>
          <Nav.Link href="#charts">Internals</Nav.Link>
          <Nav.Link href={APP_GRADES_PAGE}>Grades</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
