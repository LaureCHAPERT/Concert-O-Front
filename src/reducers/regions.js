// import actions
import { SAVE_REGIONS } from '../actions/regions';

const initialState = {
  regions: [],
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_REGIONS:
      /*
      - on crée un nouvel objet : {}
      - on déverse dedans toutes les informations du state actuel : ...state
      - on écrase une valeur qui provenait du state actuel
      */
      return {
        ...state, // regions: state.regions
        regions: action.regions,
      };

    default:
      return state;
  }
};

export default reducer;
