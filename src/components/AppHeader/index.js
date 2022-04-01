import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';
import logo from 'src/assets/images/logo.png';

import './navBar.scss';

const AppHeader = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home"> <img src={logo} alt="logo" height="80" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default AppHeader;
