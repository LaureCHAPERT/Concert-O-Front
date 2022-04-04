// import react-Bootstrap's component(s)
import {
  CardGroup,
  Row,
  Col,
  Nav,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SearchBar from 'src/components/SearchBar';
import EventCard from '../EventCard';

const Home = () => (
  <div>
    <SearchBar />
    <div className="list">
      <Row className=" d-flex justify-content-center">
        <Col>
          <CardGroup>
            <LinkContainer to="/contact">
              <Nav.Link>
                <EventCard />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>
                <EventCard />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>
                <EventCard />
              </Nav.Link>
            </LinkContainer>
          </CardGroup>
        </Col>
      </Row>
    </div>
  </div>
);

export default Home;
