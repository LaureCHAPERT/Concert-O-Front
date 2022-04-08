import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import react-Bootstrap's component(s)
import {
  Col,
  Card,
} from 'react-bootstrap';
import { fetchEventsByGenre, fetchEventsByRegion } from '../../actions/events';
// import styles
import './categoryCard.scss';

// CE BOUT DE CODE NE VA PAS ICI !!!!
// const fetchEvents = ({ regionId, genreId }) => {
//   let url;
//   if (regionId && genreId) {
//     url = '/${regionId}/${genreId}';
//   } else if (regionId) {
//     url = '/${regionId}/';
//   } else if (genreId) {
//     url = '/${genreId}/';
//   } else {
//     console.log('MISSING PARAM');
//   }
// }

const CategoryCard = ({
  name,
  image,
  id,
  filterType,
}) => {
  const dispatch = useDispatch();

  let callback;
  switch (filterType) {
    case 'region':
      callback = dispatch(fetchEventsByRegion(id));
      break;
    case 'genre':
      callback = dispatch(fetchEventsByGenre(id));
      break;
    default:
      console.log('erreur');
  }
  // let fetchPayload;

  // switch(filterType) {
  //   case 'region':
  //     fetchPayload = { regionId: id, genreId: null};
  //     break;
  //   case 'genre':
  //     fetchPayload = { regionId: null, genreId: id};
  //     break;
  // };

  return (
    <Col xs={12} md={4} className="d-flex justify-content-center">
      <Card className="categories-card" style={{ width: '17rem' }} href="#" onClick={() => dispatch(callback(id))}>
        <div>
          <Card.Img variant="top" src={image} />
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
