import './searchBar.scss';
import {
  Form,
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

const AppHeader = () => (
  <div>
    <Container>
      <Form>
        <Row>
          <Col sm>
            <Form.Group>
              <Form.Label>Select Color : </Form.Label>
              <Form.Control as="select" custom>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="black">Black</option>
                <option value="orange">Orange</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col sm>
            <Form.Group>
              <Form.Label>Select Color : </Form.Label>
              <Form.Control as="select" custom>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="black">Black</option>
                <option value="orange">Orange</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  </div>
);
export default AppHeader;
