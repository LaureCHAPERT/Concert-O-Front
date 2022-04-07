// import actions
import { SAVE_EVENTS_BY_REGION } from '../actions/events';

const initialState = {
  eventsList: [],
};

const events = (state = initialState, action = {}) => {
  console.log(`the events reducer received an action ${action.type}`);
  switch (action.type) {
    case SAVE_EVENTS_BY_REGION:
      // console.log(initialState);
      return {
        ...state,
        eventsList: action.data.events,
      };

    default:
      return state;
  }
};

export default events;
