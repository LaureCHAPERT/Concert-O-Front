import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
import { fetchEventsByRegion, fetchEventsByGenre, fetchEventsWithSearchBar } from '../../actions/events';
import './searchBar.scss';

const SearchBar = ({ message }) => {
  const dispatch = useDispatch();

  // We launch the  API call to recover regions and genres in selects
  useEffect(() => {
    dispatch(fetchRegions());
    dispatch(fetchGenres());
  }, []);

  const genresList = useSelector((state) => state.genres.genresList);
  const regionsList = useSelector((state) => state.regions.regionsList);

  const [regionID, setRegionID] = useState();
  const [genreID, setGenreID] = useState();

  useEffect(() => {
    if (genresList[0] && regionsList[0]) {
      setRegionID(regionsList[0].id);
      setGenreID(genresList[0].id);
    }
  }, [genresList, regionsList]);

  const navigation = useNavigate();
  // on change la phrase d'accueil selon la page sur laquelle on est
  let catchPhrase;
  switch (message) {
    case 'hello':
      catchPhrase = 'Bienvenue sur Concert\'o';
      break;
    case 'results':
      catchPhrase = 'Il y a $ résultats à votre recherche ';
      break;
    default:
      console.log('erreur');
  }
  // on change la fonction dispatchée en fonction des id, présents ou non
  const callback = () => {
    if (regionID == null) {
      dispatch(fetchEventsByGenre(genreID));
    }
    else if (genreID == null) {
      dispatch(fetchEventsByRegion(regionID));
    }
    else {
      dispatch(fetchEventsWithSearchBar(genreID, regionID));
    }
  };

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
                <Form.Control
                  as="select"
                  onChange={(event) => {
                    setGenreID(event.target.value);
                    console.log(event.target.value);
                  }}
                >
                  <option key="#" value="">Tous les genres</option>
                  {genresList.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm>
              <Form.Group>
                <Form.Label>Choisissez votre région : </Form.Label>
                <Form.Control
                  as="select"
                  onChange={(event) => {
                    setRegionID(event.target.value);
                    console.log(event.target.value);
                  }}
                >
                  <option key="#" value="">Toutes les régions</option>
                  {regionsList.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col lg={2} className="pr-4">
              <Button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  callback();
                  navigation('/evenements');
                }}
              >
                Rechercher
              </Button>
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
