// import styles
import './genres.scss';

// import component(s)
import FilterCard from 'src/components/FilterCard';

// import react-Bootstrap's component(s)
import {
  CardGroup,
} from 'react-bootstrap';

const Genres = () => (
  <div>
    <CardGroup>
      <FilterCard />
    </CardGroup>
  </div>
);

export default Genres;
