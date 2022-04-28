import {
  Form,
  Button,
} from 'react-bootstrap';

// import styles
import './subscribe.scss';

const Subscribe = () => (
  <div className="contact-form">
    <h2 className="contact-title">S'inscrire</h2>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Pseudo</Form.Label>
        <Form.Control type="pseudo" placeholder="Goku" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
    </Form>
    <Button variant="primary">
      Valider
    </Button>
  </div>
);

export default Subscribe;
