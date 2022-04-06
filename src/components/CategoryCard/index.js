import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import react-Bootstrap's component(s)
import {
  Col,
  Card,
} from 'react-bootstrap';
import { fetchEventsByGenre } from '../../actions/events';
// import styles
import './categoryCard.scss';

const CategoryCard = ({ name, image, id }) => {
  const dispatch = useDispatch();
  return (
    <Col className="d-flex justify-content-center" onClick={() => dispatch(fetchEventsByGenre(id))}>
      <Card className="categories-card" style={{ width: '17rem' }} href="#">
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
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CategoryCard;
