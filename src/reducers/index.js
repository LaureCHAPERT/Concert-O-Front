import { combineReducers } from 'redux';

import genresReducer from './genres';
import regionsReducer from './regions';

const rootReducer = combineReducers({
  genres: genresReducer,
  regions: regionsReducer,
});

export default rootReducer;
