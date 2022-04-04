//import Bootsrap-react's components
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './appHeader.scss';
import logo from 'src/assets/images/logo.png';

const AppHeader = () => (
  <div>
    <Navbar id="mainNav" expand="lg">
      <Container id="navbar-container">
        <Navbar.Brand href="#home"> <img src={logo} alt="logo" height="80" />
        </Navbar.Brand>
        <h2 className="navbar-title">Concert'o</h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " placement="right">
          <Nav className="flex-grow-1 justify-content-evenly">
            <Nav.Link href="/">Accueil</Nav.Link>
            <LinkContainer to="/genres">
            <Nav.Link href="/genres">Genres</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/regions">
            <Nav.Link href="/genres">Regions</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/genres">
            <Nav.Link href="/events">Tous les événements</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>

);
export default AppHeader;
