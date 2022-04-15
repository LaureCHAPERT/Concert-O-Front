import { SAVE_GENRES } from '../actions/genres';

const initialState = {
  genresList: [],
};

const genres = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_GENRES:
      /*
      - create a new object : {}
      - dumping all the information of the current state into it: ...state
      - overwriting value from the current state
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
