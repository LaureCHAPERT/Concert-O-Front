import { useSelector } from 'react-redux';
// import react-Bootstrap's component(s)
import {
  Row,
} from 'react-bootstrap';
// import { useLocation } from 'react-router-dom';
import SearchBar from 'src/components/SearchBar';
import EventCard from '../EventCard';

import './eventsList.scss';

const EventsList = () => {
  // TODO code pour récupérer l'id avec un useLocation (pas trouvé encore)
  // on utilise useLocation pour récupérer le state de la route
  // dans lequel on a stocké genreId ou genreId
  // const location = useLocation();
  // si location est definie, prends moi son state
  // si le state est défini prends moi la région
  // console.log(location.state); => renvoie null
  const { eventsList } = useSelector((state) => state.events);
  return (
    <div>
      <SearchBar
      // on passe une string pour changer le titre en fonction de la page
      // on passe la longueur du tableau pour dynamiser les résultats dans le titre
        results={eventsList.length}
        // genreId={genreId}
        // regionId={regionId}
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
