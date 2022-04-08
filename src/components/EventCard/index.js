import PropTypes from 'prop-types';
import {
  Card,
  Button,
  Col,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './eventCard.scss';

const EventCard = ({
  name,
  description,
  image,
}) => (

  <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
    <LinkContainer to="/detail">
      <Card className="events-card">
        <Card.Img className="events-img" variant="top" src={image} />
        <Card.Body className="events-body">
          <Card.Title>{name}</Card.Title>
          <Card.Text className="events-text">
            {description}
          </Card.Text>
          <Button className="events-button" variant="primary stretched-link">Voir le détail</Button>
        </Card.Body>
      </Card>
    </LinkContainer>
  </Col>

);

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.number.isRequired,
};

export default EventCard;
