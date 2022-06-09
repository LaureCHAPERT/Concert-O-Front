// === action types
export const FETCH_GENRES = 'FETCH_GENRES';
export const SAVE_GENRES = 'SAVE_GENRES';
export const SET_SELECTED_GENRE_ID = 'SET_SELECTED_GENRE_ID';

// === action creators
export const fetchGenres = () => ({
  type: FETCH_GENRES,
});

export const saveGenres = (genres) => ({
  type: SAVE_GENRES,
  genres: genres,
});

export const setSelectedGenreId = (selectedID) => (
  {
    type: SET_SELECTED_GENRE_ID,
    selectedID,
  }
);
