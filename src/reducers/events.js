// import actions
import { FETCH_EVENTS_BY_REGION } from '../actions/events';

const initialState = {
  regionsList: [],
};
const regions = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_EVENTS_BY_REGION:
      return {
      };

    default:
      return state;
  }
};

export default regions;
