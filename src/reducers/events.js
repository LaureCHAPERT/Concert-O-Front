import {
  SAVE_EVENTS_BY_GENRE,
  SAVE_DETAIL_EVENT,
  SAVE_EVENTS_ON_HOMEPAGE,
} from '../actions/events';

const initialState = {
  eventsList: [],
  eventDetail: {
    name: '',
    image: '',
    description: '',
    region: {
      name: '',
    },
    genres: [
      {
        name: '',
      },
    ],
    price: 0,
    linkTicketing: '',
  },
};

const events = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_EVENTS_BY_GENRE:
      /*
      - on crée un nouvel objet : {}
      - on déverse dedans toutes les informations du state actuel : ...state
      - on écrase une valeur qui provenait du state actuel
      */
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

    default:
      return state;
  }
};

export default events;
