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
    <Container className="searchbarContainer">
      <div className="background-title">
        <h1 className="homepage">Bienvenue</h1>
      </div>
      <Form className="form">
        <Row>
          <Col sm>
            <Form.Group>
              <Form.Label>Choisissez votre style musical : </Form.Label>
              <Form.Control as="select">
                <option value="red">Folk</option>
                <option value="blue">Rock</option>
                <option value="green">Reggae</option>
                <option value="black">Funk</option>
                <option value="orange">Hip-hop</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col sm>
            <Form.Group>
              <Form.Label>Choisissez votre région : </Form.Label>
              <Form.Control as="select">
                <option value="red">Occitanie</option>
                <option value="blue">Provence Alpes Côte d'Azur</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col lg={2} className="pr-4">
            <Button type="submit">Rechercher</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  </div>
);
export default AppHeader;
