// import Bootsrap-react's components
import {
  Container,
  Navbar,
  Nav,
  Modal,
  Button,
  Form,
  Alert,
} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import logo from 'src/assets/images/logo.png';
import { fetchAllEvents } from '../../actions/events';
import { setSelectedRegionId } from '../../actions/regions';
import { setSelectedGenreId } from '../../actions/genres';
import {
  changeEmail,
  changePassword,
  logIn,
  logOut,
} from '../../actions/user';
import './appHeader.scss';

const AppHeader = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const token = useSelector((state) => state.user.token);
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const errorMessage = useSelector((state) => state.user.errorMessage);

  useEffect(() => {
    if (errorMessage === '') {
      setShow(false);
    }
  }, [errorMessage, token]);

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
                <Nav.Link className="navlink-header">Tous les ??v??nements</Nav.Link>
              </LinkContainer>
              <Nav.Link
                className="navlink-header "
                onClick={() => {
                  if (token !== null) {
                    dispatch(logOut());
                  }
                  else {
                    setShow(true);
                  }
                }}
              >{!token ? 'Se connecter' : 'Se D??connecter'}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Me connecter</Modal.Title>
        </Modal.Header>
        { errorMessage !== '' && <Alert variant="danger">{errorMessage}</Alert> }
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                email={emailValue}
                onChange={(event) => {
                  dispatch(changeEmail(event.target.value));
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                password={passwordValue}
                onChange={(event) => {
                  dispatch(changePassword(event.target.value));
                }}

              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              dispatch(logIn());
            }}
          >
            Valider
          </Button>
          <LinkContainer
            to="/inscription"
          >
            <Button onClick={() => setShow(false)} variant="primary">
              Pas encore inscrit ? Cliquez ici
            </Button>
          </LinkContainer>
        </Modal.Footer>
      </Modal>
    </div>

  );
};
export default AppHeader;
