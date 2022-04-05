import { useSelector } from 'react-redux';
// import styles
import './genres.scss';
import CategorieCard from 'src/components/CategorieCard';
// import react-Bootstrap's component(s)
import {
  Row,
} from 'react-bootstrap';

const Genres = () => {
  const genresList = useSelector((state) => state.genres);
  return (
    <div className="cardGrid">
      <Row>
        {genresList.map((item) => (
          <CategorieCard key={item.id} {...item} />
        ))}
      </Row>
    </div>
  );
};
export default Genres;
