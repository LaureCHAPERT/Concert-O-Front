import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import regionsMiddleware from '../middlewares/regionsMiddleware';
import genresMiddleware from '../middlewares/genresMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(
  applyMiddleware(
    genresMiddleware,
    regionsMiddleware,
  ),
);
const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
