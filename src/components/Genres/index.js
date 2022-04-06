import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import react-Bootstrap's component(s)
import {
  Row,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CategoryCard from 'src/components/CategoryCard';

import { fetchGenres } from '../../actions/genres';
// import styles
import './genres.scss';

const Genres = () => {
  const dispatch = useDispatch();
  const genresList = useSelector((state) => state.genres.genres);
  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <LinkContainer to="contact" style={{ cursor: 'pointer' }}>
      <div className="cardGrid">
        <Row>
          {genresList.map((item) => (
            <CategoryCard key={item.id} {...item} />
          ))}
        </Row>
      </div>
    </LinkContainer>
  );
};
export default Genres;
