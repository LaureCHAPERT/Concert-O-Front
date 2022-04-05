import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CategorieCard from 'src/components/CategorieCard';
// import react-Bootstrap's component(s)
import {
  Row,
} from 'react-bootstrap';
import { fetchGenres } from '../../actions/genres';
// import styles
import './genres.scss';

const Genres = () => {
  const dispatch = useDispatch();
  const genresList = useSelector((state) => state.genres);
  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

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
