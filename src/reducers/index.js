import { combineReducers } from 'redux';

import genres from './genres';
import regions from './regions';
import events from './events';

const reducer = combineReducers({
  genres: genres,
  regions: regions,
  events: events,
});

export default reducer;
