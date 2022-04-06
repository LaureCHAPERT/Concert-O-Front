import { SAVE_GENRES } from '../actions/genres';

const initialState = {
  genres: [],
};

const genres = (state = initialState, action = {}) => {
  console.log(`le reducer a reçu une action ${action.type}`);
  switch (action.type) {
    case SAVE_GENRES:
      /*
      - on crée un nouvel objet : {}
      - on déverse dedans toutes les informations du state actuel : ...state
      - on écrase une valeur qui provenait du state actuel
      */
      return {
        ...state, // list: state.list
        genres: action.genres,
      };

    default:
      return state;
  }
};

export default genres;
