import { useSelector } from 'react-redux';
// import react-Bootstrap's component(s)
import {
  Row,
} from 'react-bootstrap';
import SearchBar from 'src/components/SearchBar';
import EventCard from '../EventCard';

import './eventsList.scss';

const EventsList = () => {
  const { eventsList } = useSelector((state) => state.events);
  return (
    <div>
      <SearchBar
      // on passe une string pour changer le titre en fonction de la page
      // on passe la longueur du tableau pour dynamiser les résultats dans le titre
        message="results"
        results={eventsList.length}
      />
      <Row>
        {eventsList.map((item) => (
          <EventCard key={item.id} {...item} />
        ))}
      </Row>
    </div>
  );
};

export default EventsList;
