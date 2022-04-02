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
      <Container id="navbar-container">
        <Navbar.Brand href="#home"> <img src={logo} alt="logo" height="80" />
        </Navbar.Brand>
        <h2 className="navbar-title">Concert'o</h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="">
            <Nav.Link className="ms-auto" href="#home">Accueil</Nav.Link>
            <Nav.Link href="#home">Genres</Nav.Link>
            <Nav.Link href="#home">Régions</Nav.Link>
            <Nav.Link href="#home">Tous les événements</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);
export default AppHeader;
