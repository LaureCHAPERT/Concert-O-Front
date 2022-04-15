import PropTypes from 'prop-types';
import { useEffect } from 'react';
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
import { fetchRegions, setSelectedRegionId } from '../../actions/regions';
import { fetchGenres, setSelectedGenreId } from '../../actions/genres';
import {
  fetchEventsWithSearchBar,
  fetchEventsByGenre,
  fetchEventsByRegion,
  fetchAllEvents,
} from '../../actions/events';
import './searchBar.scss';

const SearchBar = ({
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

  const genreID = useSelector((state) => state.genres.selectedGenreID);
  const regionID = useSelector((state) => state.regions.selectedRegionID);

  const callPhrase = () => {
    let catchPhrase;
    if (message === 'hello') {
      catchPhrase = 'Bienvenue sur Concert\'o';
    }
    else {
      catchPhrase = `Il y a ${results} résultat(s) à votre recherche `;
    }
    return catchPhrase;
  };

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
    <div>
      <Container className="searchbarContainer">
        <div className="background-title">
          <h1 className="catchPhrase">{callPhrase()}</h1>
        </div>
        <Form className="form">
          <Row>
            <Col sm>
              <Form.Group>
                <Form.Label>Choisissez votre style musical : </Form.Label>
                <Form.Control
                  as="select"
                  onChange={(event) => {
                    if (Number(event.target.value)) {
                      dispatch(setSelectedGenreId(event.target.value));
                    }
                    else {
                      setSelectedGenreId();
                    }
                  }}
                  value={genreID}
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
                    if (Number(event.target.value)) {
                      dispatch(setSelectedRegionId(event.target.value));
                    }
                    else {
                      setSelectedRegionId();
                    }
                  }}
                  value={regionID}
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

SearchBar.defaultProps = {
  results: 0,
  // genreId: 0,
  // regionId: 0,
};
SearchBar.propTypes = {
  // genreId: PropTypes.number,
  // regionId: PropTypes.number,
  results: PropTypes.number,
  message: PropTypes.string.isRequired,
};
export default SearchBar;
