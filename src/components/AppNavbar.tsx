import React, { FC } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { APP_LOGIN_PAGE, APP_GRADES_PAGE, APP_INTERNALS_PAGE, APP_LANDING_PAGE } from '../common/Routes';
import { ScholarBuddyLogo } from '../assets/images';

const AppNavbar: FC<{}> = () => (
  <Navbar>
    <Container>
      <Navbar.Brand href={APP_LOGIN_PAGE}>
        <img src={ScholarBuddyLogo} alt="logo" width="50" />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href={APP_LANDING_PAGE}>Attendance</Nav.Link>
        <Nav.Link href={APP_INTERNALS_PAGE}>Internals</Nav.Link>
        <Nav.Link href={APP_GRADES_PAGE}>Grades</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default AppNavbar;
