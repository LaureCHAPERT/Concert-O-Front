import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Form,
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
// Import Action(s)
import { fetchRegions } from '../../actions/regions';
import { fetchGenres } from '../../actions/genres';
import './searchBar.scss';

const SearchBar = ({ message }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRegions());
    dispatch(fetchGenres());
  }, []);
  const genresList = useSelector((state) => state.genres.genresList);
  const regionsList = useSelector((state) => state.regions.regionsList);

  let catchPhrase;
  switch (message) {
    case 'hello':
      catchPhrase = 'Bienvenue sur Concert\'o';
      break;
    case 'results':
      catchPhrase = 'Il y a X résultats à votre recherche ';
      break;
    default:
      console.log('erreur');
  }
  return (
    <div>
      <Container className="searchbarContainer">
        <div className="background-title">
          <h1 className="catchPhrase">{catchPhrase}</h1>
        </div>
        <Form className="form">
          <Row>
            <Col sm>
              <Form.Group>
                <Form.Label>Choisissez votre style musical : </Form.Label>
                <Form.Control as="select">
                  {genresList.map((item) => (
                    <option key={item.id} value="selectGenre">{item.name}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm>
              <Form.Group>
                <Form.Label>Choisissez votre région : </Form.Label>
                <Form.Control as="select">
                  {regionsList.map((item) => (
                    <option key={item.id} value="selectRegion">{item.name}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col lg={2} className="pr-4">
              <Button type="submit">Rechercher</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};
SearchBar.propTypes = {
  message: PropTypes.string.isRequired,
};
export default SearchBar;
