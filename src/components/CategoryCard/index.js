import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import react-Bootstrap's component(s)
import {
  Col,
  Card,
} from 'react-bootstrap';

import { fetchEventsByRegion } from '../../actions/events';
// import styles
import './categoryCard.scss';

const CategoryCard = ({ name, image, id }) => {
  const dispatch = useDispatch();
  return (
    <Col className="d-flex justify-content-center">
      <Card
        className="categories-card"
        style={{ width: '17rem' }}
        href="#"
        onClick={() => {
          dispatch(fetchEventsByRegion(id));
        }}
      >
        <div>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
};
CategoryCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CategoryCard;
