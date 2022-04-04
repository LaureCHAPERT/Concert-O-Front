// import react-Bootstrap's component(s)
import {
  CardGroup,
  Row,
  Col,
} from 'react-bootstrap';
import SearchBar from 'src/components/SearchBar';
import EventCard from '../EventCard';

const Home = () => (
  <div>
    <SearchBar />
    <div className="list">
      <Row className="g-4">
        <Col className="d-flex justify-content-center">
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

export default Home;
