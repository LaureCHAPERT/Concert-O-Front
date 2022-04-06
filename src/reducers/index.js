import { combineReducers } from 'redux';

import genres from './genres';
import regions from './regions';

const reducer = combineReducers({
  genres: genres,
  regions: regions,
});

export default reducer;
