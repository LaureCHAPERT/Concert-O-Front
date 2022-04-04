// import styles
import './regions.scss';

// import component(s)
import FilterCard from 'src/components/FilterCard';

// import react-Bootstrap's component(s)
import {
  CardGroup,
} from 'react-bootstrap';

const Regions = () => (
  <div>
    <CardGroup>
      <FilterCard />
    </CardGroup>
  </div>
);

export default Regions;
