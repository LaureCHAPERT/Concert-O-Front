import {
  SAVE_EVENTS_BY_GENRE,
  SAVE_DETAIL_EVENT,
  SAVE_EVENTS_ON_HOMEPAGE,
  SAVE_EVENTS_BY_REGION,
  SAVE_EVENTS_WITH_SEARCHBAR,
  SAVE_ALL_EVENTS,
} from '../actions/events';

const initialState = {
  eventsList: [],
  eventDetail: {
    region: {
    },
    genres: [
      {
      },
    ],
  },
};

const events = (state = initialState, action = {}) => {
  // console.log(`the events reducer received an action ${action.type}`);
  switch (action.type) {
    case SAVE_EVENTS_BY_GENRE:
      return {
        ...state, // list: state.list
        eventsList: action.data.events,
      };
    case SAVE_EVENTS_BY_REGION:
      return {
        ...state, // list: state.list
        eventsList: action.data.events,
      };
    case SAVE_DETAIL_EVENT:
      return {
        ...state,
        eventDetail: action.data,
      };
    case SAVE_EVENTS_ON_HOMEPAGE:
      return {
        ...state,
        eventsList: action.events,
      };
    case SAVE_EVENTS_WITH_SEARCHBAR:
      return {
        ...state,
        eventsList: action.data,
      };
    case SAVE_ALL_EVENTS:
      return {
        ...state,
        eventsList: action.data,
      };
    default:
      return state;
  }
};

export default events;
