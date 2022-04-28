// import Bootsrap-react's components
import {
  Container,
  Navbar,
  Nav,
  Modal,
  Button,
  Form,
} from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import logo from 'src/assets/images/logo.png';
import { fetchAllEvents } from '../../actions/events';
import { setSelectedRegionId } from '../../actions/regions';
import { setSelectedGenreId } from '../../actions/genres';
import './appHeader.scss';

const AppHeader = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar id="mainNav" expand="lg">
        <Container id="navbar-container">
          <LinkContainer to="/">
            <Navbar.Brand> <img src={logo} alt="logo" height="60" />
            </Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/">
            <Nav.Link>
              <h2 className="navbar-title">Concert'o</h2>
            </Nav.Link>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav " placement="right">
            <Nav className="flex-grow-1 justify-content-evenly">
              <LinkContainer
                to="/"
                onClick={() => {
                  dispatch(setSelectedGenreId());
                  dispatch(setSelectedRegionId());
                }}
              >
                <Nav.Link className="navlink-header">Accueil</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/genres">
                <Nav.Link className="navlink-header">Genres</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/regions">
                <Nav.Link className="navlink-header">Regions</Nav.Link>
              </LinkContainer>
              <LinkContainer
                to="/tous-les-evenements"
                onClick={() => {
                  dispatch(setSelectedGenreId());
                  dispatch(setSelectedRegionId());
                  dispatch(fetchAllEvents());
                }}
              >
                <Nav.Link className="navlink-header">Tous les événements</Nav.Link>
              </LinkContainer>
              <Nav.Link className="navlink-header " onClick={handleShow}>Me connecter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Me connecter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Valider
          </Button>
          <LinkContainer
            to="/inscription"
          >
            <Button onClick={handleClose} variant="primary">
              Pas encore inscrit ? Cliquez ici
            </Button>
          </LinkContainer>
        </Modal.Footer>
      </Modal>
    </div>

  );
};
export default AppHeader;
