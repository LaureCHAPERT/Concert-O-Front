import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Card,
  Button,
  Col,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { fetchDetailEvent } from '../../actions/events';
import './eventCard.scss';

const EventCard = ({
  name,
  description,
  image,
  id,
}) => {
  const dispatch = useDispatch();
  // TODO const slug = useSelector((state) => state.events.eventDetail.slug);
  return (
    <Col sm={12} md={4} className="d-flex justify-content-center" onClick={() => dispatch(fetchDetailEvent(id))}>
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
};

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default EventCard;
