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
import {
  fetchEventsWithSearchBar,
  fetchEventsByGenre,
  fetchEventsByRegion,
  fetchAllEvents,
} from '../../actions/events';
import './searchBar.scss';

const SearchBar = ({
  // regionId,
  // genreId,
  results,
  message,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  // console.log(results);
  // We launch the  API call to recover regions and genres in selects
  useEffect(() => {
    dispatch(fetchRegions());
    dispatch(fetchGenres());
  }, []);

  const genresList = useSelector((state) => state.genres.genresList);
  const regionsList = useSelector((state) => state.regions.regionsList);

  const [regionID, setRegionID] = useState(); // regionId
  const [genreID, setGenreID] = useState(); // genreId

  let catchPhrase;
  switch (message) {
    case 'results':
      catchPhrase = `Il y a ${results} résultat(s) à votre recherche `;
      break;
    case 'hello':
      catchPhrase = 'Bienvenue sur Concert\'o';
      break;
    default:
      console.log('erreur');
  }

  // on change la fonction dispatchée en fonction des id, présents ou non
  const callback = () => {
    if (!regionID && genreID) {
      dispatch(fetchEventsByGenre(genreID));
      // console.log(genreID, regionID);
    }
    else if (!genreID && regionID) {
      dispatch(fetchEventsByRegion(regionID));
      // console.log(genreID, regionID);
    }
    else if (genreID && regionID) {
      dispatch(fetchEventsWithSearchBar(genreID, regionID));
      // console.log(genreID, regionID);
    }
    else {
      dispatch(fetchAllEvents());
      // console.log(genreID, regionID);
    }
  };
  return (
    <div className="flex-div">
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
                    // on utlise numer pour faibre la distinction entre les ID des régions et la
                    // string "tous les genres"
                    if (Number(event.target.value)) {
                      setGenreID(event.target.value);
                    }
                    else {
                      setGenreID();
                    }
                    // console.log(event.target.value);
                  }}
                >
                  <option key="#" value={undefined}>Tous les genres</option>
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
                    // on utlise numer pour faibre la distinction entre les ID des régions et la
                    // string "toutes les régions"
                    if (Number(event.target.value)) {
                      setRegionID(event.target.value);
                    }
                    else {
                      setRegionID();
                    }
                  }}
                >
                  <option key="#" value={undefined}>Toutes les régions</option>
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
                  navigation('/resultats-evenements');
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

/* SearchBar.defaultProps = {
  genreId: 0,
  regionId: 0,
}; */
SearchBar.propTypes = {
  // genreId: PropTypes.number,
  // regionId: PropTypes.number,
  results: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};
export default SearchBar;
