import axios from 'axios';
import {
  FETCH_EVENTS_BY_GENRE,
  saveEventsByGenre,
  FETCH_DETAIL_EVENT,
  saveDetailEvent,
  FETCH_EVENTS_ON_HOMEPAGE,
  saveEventsOnHomepage,
  FETCH_EVENTS_BY_REGION,
  saveEventsByRegion,
  FETCH_EVENTS_WITH_SEARCHBAR,
  saveEventsWithSearchBar,
} from '../actions/events';

const eventsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EVENTS_BY_GENRE:
      // We send request to the API in order to get an event list filtered by genres
      axios.get(`http://jeremy-bruguier.vpnuser.lan:8080/api/genre/${action.id}/events`)
        .then((response) => {
          // console.log(response.data.events);
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
          // console.log(response.data);
          store.dispatch(saveDetailEvent(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_EVENTS_ON_HOMEPAGE:
      // We send request to the API in order to get an event detail
      axios.get('http://jeremy-bruguier.vpnuser.lan:8080/api/event/home')
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveEventsOnHomepage(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_EVENTS_BY_REGION:
      // We send request to the API in order to get an event list filtered by genres
      axios.get(`http://jeremy-bruguier.vpnuser.lan:8080/api/region/${action.id}/events`)
        .then((response) => {
          // console.log('response', response.data);
          store.dispatch(saveEventsByRegion(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_EVENTS_WITH_SEARCHBAR:
      // We send request to the API in order to get an event list filtered by genres
      axios.get(`http://jeremy-bruguier.vpnuser.lan:8080/api/event/region/${action.regionId}/genre/${action.genreId}`)
        .then((response) => {
          console.log('response', response.data);
          store.dispatch(saveEventsWithSearchBar(response.data));
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
