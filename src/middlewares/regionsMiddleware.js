import axios from 'axios';
// import { URL } from '../../config';
import { FETCH_REGIONS, saveRegions } from '../actions/regions';

const regionsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_REGIONS:
      // We send request to the API in order to get regions list
      axios.get('http://laure-chapert.vpnuser.lan:8000/api/region')
        .then((response) => {
          store.dispatch(saveRegions(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
      break;
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default regionsMiddleware;
