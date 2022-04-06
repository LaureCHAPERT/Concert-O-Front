import { SAVE_EVENTS_BY_GENRE } from '../actions/events';

const initialState = {
  eventsList: [],
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

    default:
      return state;
  }
};

export default events;
