// import styles
import './genres.scss';
import CategorieCard from 'src/components/CategorieCard';
// import react-Bootstrap's component(s)
import {
  Row,
} from 'react-bootstrap';

const Genres = () => (

  <div className="cardGrid">
    <Row>
      <CategorieCard />
      <CategorieCard />
      <CategorieCard />
      <CategorieCard />
    </Row>
  </div>
);

export default Genres;
