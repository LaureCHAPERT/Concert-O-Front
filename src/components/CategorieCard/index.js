import PropTypes from 'prop-types';

// import react-Bootstrap's component(s)
import {
  Col,
  Card,
} from 'react-bootstrap';
import logo from 'src/assets/images/festival.jpg';
// import styles
import './categorieCard.scss';

const CategorieCard = ({ title }) => (

  <Col className="d-flex justify-content-center">
    <Card className="categories-card" style={{ width: '17rem' }} href="#">
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  </Col>

);
CategorieCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CategorieCard;
