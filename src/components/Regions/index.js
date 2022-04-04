// import styles
import './regions.scss';

// import react-Bootstrap's component(s)
import {
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import logo from 'src/assets/images/festival.jpg';

const Regions = () => (

  <div className="cardGrid">
    <Row>
      <Col className="d-flex justify-content-center">
        <Card className="categories-card" style={{ width: '17rem' }} href="#">
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Titre</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col className="d-flex justify-content-center">
        <Card className="categories-card" style={{ width: '17rem' }} href="#">
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Titre</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col className="d-flex justify-content-center">
        <Card className="categories-card" style={{ width: '17rem' }} href="#">
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Titre</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col className="d-flex justify-content-center">
        <Card className="categories-card" style={{ width: '17rem' }} href="#">
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Titre</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Regions;
