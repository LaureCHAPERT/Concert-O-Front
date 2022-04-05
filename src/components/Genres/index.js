// import styles
import './genres.scss';
import CategoryCard from 'src/components/CategoryCard';
// import react-Bootstrap's component(s)
import {
  Row,
} from 'react-bootstrap';

const Genres = () => (

  <div className="cardGrid">
    <Row>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </Row>
  </div>
);

export default Genres;
