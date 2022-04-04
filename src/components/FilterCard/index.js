// import styles
import './filtercard.scss';

// import react-Bootstrap's component(s) 
import {
  Card,
} from 'react-bootstrap';

const FilterCard = () => (
  <div>
    <Card style={{ width: '18rem' }} href="#">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Titre</Card.Title>      
      </Card.Body>
    </Card>
  </div>
);

export default FilterCard;
