import axios from 'axios';
import {
  FETCH_EVENTS_BY_GENRE,
  saveEventsByGenre,
  FETCH_DETAIL_EVENT,
  saveDetailEvent,
} from '../actions/events';

const eventsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EVENTS_BY_GENRE:
      // We send request to the API in order to get an event list filtered by genres
      axios.get(`http://jeremy-bruguier.vpnuser.lan:8080/api/genre/${action.id}/events`)
        .then((response) => {
          store.dispatch(saveEventsByGenre(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_DETAIL_EVENT:
      // We send request to the API in order to get an event detail
      axios.get(`http://jeremy-bruguier.vpnuser.lan:8080/api/event/${action.id}`)
        .then((response) => {
          store.dispatch(saveDetailEvent(response.data));
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
