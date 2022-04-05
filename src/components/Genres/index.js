import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import react-Bootstrap's component(s)
import {
  Row,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CategorieCard from 'src/components/CategorieCard';

import { fetchGenres } from '../../actions/genres';
// import styles
import './genres.scss';

const Genres = () => {
  const dispatch = useDispatch();
  const genresList = useSelector((state) => state.genresList);
  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <LinkContainer to="contact">
      <div className="cardGrid">
        <Row>
          {genresList.map((item) => (
            <CategorieCard key={item.id} {...item} />
          ))}
        </Row>
      </div>
    </LinkContainer>
  );
};
export default Genres;
