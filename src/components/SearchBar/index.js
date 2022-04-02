import './searchBar.scss';
import {
  Form,
  Button,
} from 'react-bootstrap';

const AppHeader = () => (
  <div>
    <Form role="form" className="form">
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label>Select Color : </Form.Label>
        <Form.Control as="select" custom>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
          <option value="orange">Orange</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label>Select Color : </Form.Label>
        <Form.Control as="select" custom>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
          <option value="orange">Orange</option>
        </Form.Control>
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  </div>
);
export default AppHeader;
