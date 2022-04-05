// Import
import PropTypes from 'prop-types';

// import react-Bootstrap's component(s)
import {
  Col,
  Card,
} from 'react-bootstrap';

// import styles
import './categoryCard.scss';

const CategoryCard = ({ title, thumbnail }) => (

  <Col className="d-flex justify-content-center">
    <Card className="categories-card" style={{ width: '17rem' }} href="#">
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  </Col>

);
CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default CategoryCard;