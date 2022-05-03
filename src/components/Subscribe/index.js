import {
  Form,
  Button,
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
  const dispatch = useDispatch();
  return (
    <div className="contact-form">
      <h2 className="contact-title">S'inscrire</h2>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Pseudo</Form.Label>
          <Form.Control
            type="pseudo"
            placeholder="Goku"
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
          dispatch(createUser());
        }}
      >
        Valider
      </Button>
    </div>
  );
};

export default Subscribe;
