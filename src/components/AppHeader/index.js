import './style.scss';
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';
import logo from 'src/assets/images/logo.png';


const AppHeader = () => (
  <div>
    <Navbar id="mainNav" expand="lg">
      <Container>
        <Navbar.Brand href="#home"> <img src={logo} alt="logo" height="80" />
        </Navbar.Brand>
        <h2 className="navbar-title">Concert'o</h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " placement="right">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="#home">Accueil</Nav.Link>
            <Nav.Link className="nav-link" href="#home">Genres</Nav.Link>
            <Nav.Link className="nav-link" href="#home">Régions</Nav.Link>
            <Nav.Link className="nav-link" href="#home">Tous les événements</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <h1>Test CSS</h1>
  </div>

);

export default AppHeader;
