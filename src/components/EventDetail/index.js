import { useSelector } from 'react-redux';
import './eventDetail.scss';
import {
  Container,
  Image,
  Badge,
} from 'react-bootstrap';

const EventDetail = () => {
  const { eventDetail } = useSelector((state) => state.events);

  return (

    <Container id="eventDetail">
      <Image variant="top" src={eventDetail.image} />
      <h2 className="title">{eventDetail.name} </h2>
      <Badge bg="secondary">region</Badge>
      <Badge bg="secondary">{eventDetail.genres[0].name}</Badge>
      <div className="price">{eventDetail.price}€</div>
      <div className="description">{eventDetail.description}</div>
      <a href="#">{eventDetail.linkTicketing}</a>
    </Container>

  );
};
export default EventDetail;
