import { useState } from 'react';
import {
  Form,
  Button,
  Alert,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeEmail,
  changePassword,
  changePseudo,
  createUser,
} from '../../actions/user';

// import styles
import './subscribe.scss';

const Subscribe = () => {
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const username = useSelector((state) => state.user.username);
  const flashMessage = useSelector((state) => state.user.flashMessage);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  return (
    <div>
      <div className="subscribe-form">
        { flashMessage !== '' && <Alert variant="success">{flashMessage}</Alert> }
        { errorMessage !== '' && <Alert variant="danger">{errorMessage}</Alert> }
        <h2 className="subscribe-title">S'inscrire</h2>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Identifiant</Form.Label>
            <Form.Control
              type="pseudo"
              placeholder="Anthony"
              pseudo={username}
              onChange={(event) => {
                dispatch(changePseudo(event.target.value));
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              email={emailValue}
              onChange={(event) => {
                dispatch(changeEmail(event.target.value));
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
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
        <Button
          variant="primary"
          onClick={() => {
            if (username === '' || passwordValue === '' || emailValue === '') {
              setErrorMessage('Veuillez renseigner tous les champs');
            }
            else {
              dispatch(createUser());
              setErrorMessage('');
            }
          }}
        >
          Valider
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
