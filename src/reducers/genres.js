import { SAVE_GENRES } from '../actions/genres';

const initialState = {
  genresList: [],
};

const genres = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_GENRES:
      /*
      - on crée un nouvel objet : {}
      - on déverse dedans toutes les informations du state actuel : ...state
      - on écrase une valeur qui provenait du state actuel
      */
      return {
        ...state, // list: state.list
        genresList: action.genres,
      };

    default:
      return state;
  }
};

export default genres;
