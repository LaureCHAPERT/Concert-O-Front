import axios from 'axios';
import {
  FETCH_EVENTS_BY_REGION,
  saveEventsByRegion,
} from '../actions/events';

const eventsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EVENTS_BY_REGION:
      // We send request to the API in order to get an event list filtered by genres
      axios.get(`http://jeremy-bruguier.vpnuser.lan:8080/api/region/${action.id}/events`)
        .then((response) => {
          console.log('response', response.data);
          store.dispatch(saveEventsByRegion(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default eventsMiddleware;
