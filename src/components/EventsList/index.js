import { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import react-Bootstrap's component(s)
import {
  Row,
} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import SearchBar from 'src/components/SearchBar';
import Pagination from 'src/components/Pagination';
import EventCard from '../EventCard';
import { fetchAllEvents } from '../../actions/events';

import './eventsList.scss';

const EventsList = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  // conserver les événements au refresh avec useEffect();
  useEffect(() => {
    if (location.pathname === '/tous-les-evenements') {
      dispatch(fetchAllEvents());
    }
    else {
      console.log('coucou');
    }
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const { eventsList } = useSelector((state) => state.events);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexofFirstPost = indexOfLastPost - postsPerPage;
  const currentEvents = eventsList.slice(indexofFirstPost, indexOfLastPost);
  // Change page and scroll top top with useRef()
  const pageTopRef = useRef(null);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    pageTopRef.current.scrollIntoView();
  };
  return (
    <div>
      <SearchBar
      // we pass a string to change the title according to the page
      // we pass the length of the table to boost the results in the title
        results={eventsList.length}
        message="results"
        // genreId={genreId}
        // regionId={regionId}
      />
      <Row ref={pageTopRef}>
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
