import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import react-Bootstrap's component(s)
import {
  CardGroup,
  Row,
  Col,
} from 'react-bootstrap';
import SearchBar from 'src/components/SearchBar';
import EventCard from '../EventCard';
import { fetchEventsOnHomepage } from '../../actions/events';

import './home.scss';

const Home = () => {
  const dispatch = useDispatch();

  const { eventsList } = useSelector((state) => state.events);
  useEffect(() => {
    dispatch(fetchEventsOnHomepage());
  }, []);
  // dispatch(setSelectedGenreId());
  // dispatch(setSelectedRegionId());

  return (
    <div>
      <SearchBar message="hello" />
      <div className="list">
        <Row className=" d-flex justify-content-center">
          <Col>
            <CardGroup>
              {eventsList.map((item) => (
                <EventCard key={item.id} {...item} />
              ))}
            </CardGroup>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Home;
