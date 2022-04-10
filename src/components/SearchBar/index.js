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

const SearchBar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRegions());
    dispatch(fetchGenres());
  }, []);
  const genresList = useSelector((state) => state.genres.genresList);
  const regionsList = useSelector((state) => state.regions.regionsList);
  return (
    <div>
      <Container className="searchbarContainer">
        <div className="background-title">
          <h1 className="homepage">Bienvenue</h1>
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
export default SearchBar;
