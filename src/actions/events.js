// === action types
export const FETCH_EVENTS_BY_GENRE = 'FETCH_EVENTS_BY_GENRE';
export const SAVE_EVENTS_BY_GENRE = 'SAVE_EVENTS_BY_GENRE';
export const FETCH_DETAIL_EVENT = 'FETCH_DETAIL_EVENT';
// === action creators
export const fetchEventsByGenre = (id) => ({
  type: FETCH_EVENTS_BY_GENRE,
  id,
});

export const saveEventsByGenre = (data) => ({
  type: SAVE_EVENTS_BY_GENRE,
  data,
});

export const fetchDetailEvent = (id) => ({
  type: FETCH_DETAIL_EVENT,
  id,
});
