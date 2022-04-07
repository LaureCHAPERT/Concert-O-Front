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
  const genresList = useSelector((state) => state.genres.genresList);
  useEffect(() => {
    dispatch(fetchGenres());
  }, []);
  // empty array with useEffect : acts like componentDidMount and only runs once
  return (
    <LinkContainer to="/evenements" style={{ cursor: 'pointer' }}>
      <Row>
        {genresList.map((item) => (
          <CategoryCard key={item.id} {...item} />
        ))}
      </Row>
    </LinkContainer>
  );
};
export default Genres;
