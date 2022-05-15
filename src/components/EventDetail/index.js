import { useSelector, useDispatch } from 'react-redux';
import './eventDetail.scss';
import {
  Card,
  Image,
  Badge,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { fetchEventsByGenre, fetchEventsByRegion } from '../../actions/events';
import { setSelectedRegionId } from '../../actions/regions';
import { setSelectedGenreId } from '../../actions/genres';

const EventDetail = () => {
  const { eventDetail } = useSelector((state) => state.events);
  const { genres } = useSelector((state) => state.events.eventDetail);
  console.log(genres);
  const dispatch = useDispatch();

  const date = new Date(eventDetail.date);
  const hour = new Date(eventDetail.hour);
  const Dateoptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const Houroptions = {
    hour: 'numeric',
    minute: 'numeric',
  };
  const formatDate = date.toLocaleDateString('fr-FR', Dateoptions);
  const formatHour = hour.toLocaleTimeString('fr-FR', Houroptions);

  return (

    <Card id="eventDetail" className="justify-content-center">
      <Image className="detailImg" variant="top" src={eventDetail.image} />
      <div className="">
        <h2 className="title">{eventDetail.name}</h2>
        <LinkContainer
          style={{ cursor: 'pointer' }}
          to="/resultats-evenements"
          onClick={() => {
            dispatch(fetchEventsByRegion(eventDetail.region.id));
            dispatch(setSelectedRegionId(eventDetail.region.id));
            dispatch(setSelectedGenreId());
          }}
        ><Badge pill bg="secondary">{eventDetail.region.name}</Badge>
        </LinkContainer>
        {genres.map((genre) => (
          <LinkContainer
            key={genre.id}
            style={{ cursor: 'pointer' }}
            to="/resultats-evenements"
            onClick={() => {
              dispatch(fetchEventsByGenre(genre.id));
              dispatch(setSelectedGenreId(genre.id));
              dispatch(setSelectedRegionId());
            }}
          >
            <Badge pill key={genre.id}>{genre.name}</Badge>
          </LinkContainer>
        ))}
      </div>
      <div className="date">{formatDate}</div> <div>{formatHour}</div>
      <div className="price">{eventDetail.price}€</div>
      <div className="description">{eventDetail.description}</div>
      <a href={`${eventDetail.linkTicketing}`}>Billeterie</a>
    </Card>

  );
};
export default EventDetail;
