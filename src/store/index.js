import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers/regionsReducer';

import regionsMiddleware from 'src/middlewares/regionsMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(regionsMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
