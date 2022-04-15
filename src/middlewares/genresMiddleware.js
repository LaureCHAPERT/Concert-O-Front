import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { URL } from '../../config';
import {
  FETCH_GENRES, saveGenres,
} from '../actions/genres';

const genresMiddleware = (store) => (next) => (action) => {
  const navigation = useNavigate();
  // console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case FETCH_GENRES:
    // We send request to the API in order to get genres list
      axios.get('http://laure-chapert.vpnuser.lan:8000/api/genre')
        .then((response) => {
          store.dispatch(saveGenres(response.data));
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          navigation('*');
        });
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default genresMiddleware;
