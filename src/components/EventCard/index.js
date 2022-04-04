import './eventCard.scss';
import {
  Card,
  Button,
  Nav,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const EventCard = () => (
  <LinkContainer to="/contact">
    <Nav.Link>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Voir le détail</Button>
        </Card.Body>
      </Card>
    </Nav.Link>
  </LinkContainer>
);

export default EventCard;
