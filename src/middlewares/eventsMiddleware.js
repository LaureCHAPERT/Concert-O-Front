import axios from 'axios';

import { FETCH_EVENTS_BY_REGION, saveEventsByRegion } from '../actions/events';

const eventsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EVENTS_BY_REGION:
      axios.get('http://jeremy-bruguier.vpnuser.lan:8080/api/region')
        .then((response) => {
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
