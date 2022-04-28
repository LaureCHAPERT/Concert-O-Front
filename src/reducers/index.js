import { combineReducers } from 'redux';

import genres from './genres';
import regions from './regions';
import events from './events';
import user from './user';

const reducer = combineReducers({
  genres: genres,
  regions: regions,
  events: events,
  user: user,
});

export default reducer;
