import axios from 'axios';
import {
  FETCH_EVENTS_BY_GENRE,
  saveEventsByGenre,
} from '../actions/events';

const eventsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EVENTS_BY_GENRE:
      axios.get(`http://jeremy-bruguier.vpnuser.lan:8080/api/genre/${action.id}/events`)
        .then((response) => {
          console.log('response', response.data);
          store.dispatch(saveEventsByGenre(response.data));
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
