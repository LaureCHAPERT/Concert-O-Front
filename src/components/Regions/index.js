// import styles
import './regions.scss';
import logo from 'src/assets/images/festival.jpg';

// import react-Bootstrap's component(s)
import {
  Row,
  Col,
  Card,
  CardGroup,
} from 'react-bootstrap';

const Regions = () => (
  <div className="cardGrid">
    <Row xs={1} md={2} lg={3} className="g-4">
      <Col className="d-flex justify-content-center">
        <CardGroup>
          <Card style={{ width: '17rem' }} href="#">
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Titre</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: '17rem' }} href="#">
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Titre</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: '17rem' }} href="#">
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Titre</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: '17rem' }} href="#">
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Titre</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </Col>
    </Row>
  </div>
);

export default Regions;
