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
    <Row>
      <Col>
        <CardGroup>
          <EventCard />
          <EventCard />
          <EventCard />
        </CardGroup>
      </Col>
    </Row>
  </div>
);

export default Home;
