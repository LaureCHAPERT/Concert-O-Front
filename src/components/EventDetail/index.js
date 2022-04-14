import { useSelector } from 'react-redux';
import './eventDetail.scss';
import {
  Card,
  Image,
  Badge,
} from 'react-bootstrap';

const EventDetail = () => {
  const { eventDetail } = useSelector((state) => state.events);

  return (

    <Card id="eventDetail" className="justify-content-center">
      <Image className="detailImg" variant="top" src={eventDetail.image} />
      <div className="">
        <h2 className="title">{eventDetail.name}</h2>
        <Badge pill bg="secondary">{eventDetail.region.name}</Badge>
        <Badge pill>{eventDetail.genres[0].name}</Badge>
      </div>
      <div className="price">{eventDetail.price}€</div>
      <div className="description">{eventDetail.description}</div>
      <a href={`${eventDetail.linkTicketing}`}>Billeterie</a>
    </Card>

  );
};
export default EventDetail;
