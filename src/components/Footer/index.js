import './footer.scss';
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';

const Footer = () => (
  <div>
    <Navbar id="mainNav" expand="lg">
      <Container id="navbar-container">
        <Nav>
          <Nav.Link href="#home">Contact</Nav.Link>
          <Nav.Link href="#home">Mentions légales</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </div>

);
export default Footer;
