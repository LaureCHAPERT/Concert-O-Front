// import react-Bootstrap's component(s)
import {
  Row,
} from 'react-bootstrap';

import CategorieCard from 'src/components/CategorieCard';
// import styles
import './regions.scss';

const Regions = () => (

  <div className="cardGrid">
    <Row>
      <CategorieCard />
      <CategorieCard />
      <CategorieCard />
      <CategorieCard />
    </Row>
  </div>
);

export default Regions;
