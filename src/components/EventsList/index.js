import { useState } from 'react';
import { useSelector } from 'react-redux';
// import react-Bootstrap's component(s)
import {
  Row,
} from 'react-bootstrap';
// import { useLocation } from 'react-router-dom';
import SearchBar from 'src/components/SearchBar';
import Pagination from 'src/components/Pagination';
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
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const { eventsList } = useSelector((state) => state.events);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexofFirstPost = indexOfLastPost - postsPerPage;
  const currentEvents = eventsList.slice(indexofFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <SearchBar
      // on passe une string pour changer le titre en fonction de la page
      // on passe la longueur du tableau pour dynamiser les résultats dans le titre
        results={eventsList.length}
        message="results"
        // genreId={genreId}
        // regionId={regionId}
      />
      <Row>
        {currentEvents.map((item) => (
          <EventCard key={item.id} {...item} />
        ))}
      </Row>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={eventsList.length}
        paginate={paginate}

      />
    </div>
  );
};
export default EventsList;
