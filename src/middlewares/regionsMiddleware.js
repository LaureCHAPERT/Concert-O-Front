import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { URL } from '../../config';
import { FETCH_REGIONS, saveRegions } from '../actions/regions';

const regionsMiddleware = (store) => (next) => (action) => {
  const navigation = useNavigate();
  switch (action.type) {
    case FETCH_REGIONS:
      // We send request to the API in order to get regions list
      axios.get('http://laure-chapert.vpnuser.lan:8000/api/region')
        .then((response) => {
          store.dispatch(saveRegions(response.data));
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

export default regionsMiddleware;
