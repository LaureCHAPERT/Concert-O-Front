import PropTypes from 'prop-types';
import './eventCard.scss';
import {
  Card,
  Button,
  Col,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const EventCard = ({ name, description, image }) => (
  <Col className="d-flex justify-content-center">
    <LinkContainer to="/detail">
      <Card>
        <Card.Img className="events-img" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name} </Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary stretched-link">Voir le détail</Button>
        </Card.Body>
      </Card>
    </LinkContainer>
  </Col>
);
EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EventCard;
