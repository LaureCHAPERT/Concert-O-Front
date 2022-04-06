import PropTypes from 'prop-types';

// import react-Bootstrap's component(s)
import {
  Col,
  Card,
} from 'react-bootstrap';
// import styles
import './categoryCard.scss';

const CategoryCard = ({ name, image }) => (
  <Col className="d-flex justify-content-center">
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
CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CategoryCard;
