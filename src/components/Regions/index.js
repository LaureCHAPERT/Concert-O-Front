// import react-Bootstrap's component(s)
import {
  Row,
} from 'react-bootstrap';

import CategoryCard from 'src/components/CategoryCard';
// import styles
import './regions.scss';

const Regions = () => (

  <div className="cardGrid">
    <Row>
      <CategoryCard />
    </Row>
  </div>
);

export default Regions;
