// import react-Bootstrap's component(s)
import {
  CardGroup,
  Row,
  Col,
} from 'react-bootstrap';
import SearchBar from 'src/components/SearchBar';
import EventCard from '../EventCard';

import './eventsList.scss';

const EventsList = () => (
  <div>
    <SearchBar />
    <div className="list">
      <Row className=" d-flex justify-content-center">
        <Col>
          <CardGroup>
            <EventCard />
            <EventCard />
            <EventCard />
          </CardGroup>
        </Col>
      </Row>
    </div>
  </div>
);

export default EventsList;
