// import react-Bootstrap's component(s)
import {
  CardGroup,
} from 'react-bootstrap';
import SearchBar from 'src/components/SearchBar';
import EventCard from '../EventCard';

const Home = () => (
  <div>
    <SearchBar />
    <CardGroup>
      <EventCard />
      <EventCard />
      <EventCard />
    </CardGroup>
  </div>
);

export default Home;
