import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import react-Bootstrap's component(s)
import {
  Col,
  Card,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { fetchEventsByGenre, fetchEventsByRegion } from '../../actions/events';
import { setSelectedRegionId } from '../../actions/regions';
import { setSelectedGenreId } from '../../actions/genres';
// import styles
import './categoryCard.scss';

const CategoryCard = ({
  name,
  image,
  id,
  filterType,

}) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleOnClick = () => {
    // console.log(typeof id);
    switch (filterType) {
      case 'region':
        dispatch(fetchEventsByRegion(id));
        dispatch(setSelectedRegionId(id));
        dispatch(setSelectedGenreId());
        navigation('/resultats-evenements');
        // console.log(id);
        break;
      case 'genre':
        dispatch(fetchEventsByGenre(id));
        dispatch(setSelectedGenreId(id));
        dispatch(fetchEventsByRegion());
        navigation('/resultats-evenements');
        break;
      default:
        // console.log('erreur');
        navigation('*');
    }
  };

  return (
    <Col xs={12} md={4} className="d-flex justify-content-center">
      <Card className="categories-card" style={{ width: '17rem', cursor: 'pointer' }} href="#" onClick={() => handleOnClick()}>
        <div>
          <Card.Img className="categoryImage" variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </div>
      </Card>
    </Col>

  );
};
CategoryCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  filterType: PropTypes.string.isRequired,
};

export default CategoryCard;
