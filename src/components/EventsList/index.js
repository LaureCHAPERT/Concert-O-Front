import { useSelector } from 'react-redux';
// import react-Bootstrap's component(s)
import {
  CardGroup,
  Row,
  Col,
} from 'react-bootstrap';
import SearchBar from 'src/components/SearchBar';
import EventCard from '../EventCard';

import './eventsList.scss';

const EventsList = () => {
  const { eventsList } = useSelector((state) => state.events);
  return (
    <div>
      <SearchBar />
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

export default EventsList;
