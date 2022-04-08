// import actions
import { SAVE_EVENTS_BY_REGION } from '../actions/events';

const initialState = {
  eventsList: [],
};

const events = (state = initialState, action = {}) => {
  // console.log(`the events reducer received an action ${action.type}`);
  switch (action.type) {
    case SAVE_EVENTS_BY_REGION:
      /*
      - on crée un nouvel objet : {}
      - on déverse dedans toutes les informations du state actuel : ...state
      - on écrase une valeur qui provenait du state actuel
      */
      console.log(action);
      return {
        ...state, // list: state.list
        eventsList: action.data.events,
      };
    default:
      return state;
  }
};

export default events;
