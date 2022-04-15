import { SAVE_GENRES, SET_SELECTED_GENRE_ID } from '../actions/genres';

const initialState = {
  genresList: [],
  selectedGenreID: undefined,
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

    case SET_SELECTED_GENRE_ID:
      return {
        ...state,
        selectedGenreID: action.selectedID,
      };
    default:
      return state;
  }
};

export default genres;
