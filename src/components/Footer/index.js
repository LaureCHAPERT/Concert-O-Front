import './footer.scss';
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Footer = () => (
  <div className="footer">
    <Navbar id="mainNav" expand="lg">
      <Container id="navbar-container">
        <Nav className="flex-grow-1 justify-content-evenly">
          <LinkContainer to="/contact">
            <Nav.Link className="navlink-footer">Contact</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/mentions-legales">
            <Nav.Link className="navlink-footer">Mentions légales</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  </div>
);
export default Footer;
