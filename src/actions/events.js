// === action types
export const FETCH_EVENTS_BY_GENRE = 'FETCH_EVENTS_BY_GENRE';
export const SAVE_EVENTS_BY_GENRE = 'SAVE_EVENTS_BY_GENRE';
export const FETCH_EVENTS_BY_REGION = 'FETCH_EVENTS_BY_REGION';
export const SAVE_EVENTS_BY_REGION = 'SAVE_EVENTS_BY_REGION';
export const FETCH_DETAIL_EVENT = 'FETCH_DETAIL_EVENT';
export const SAVE_DETAIL_EVENT = 'SAVE_DETAIL_EVENT';
export const FETCH_EVENTS_ON_HOMEPAGE = 'FETCH_EVENTS_ON_HOMEPAGE';
export const SAVE_EVENTS_ON_HOMEPAGE = 'SAVE_EVENTS_ON_HOMEPAGE';
export const FETCH_EVENTS_WITH_SEARCHBAR = 'FETCH_EVENTS_WITH_SEARCHBAR';
export const SAVE_EVENTS_WITH_SEARCHBAR = 'SAVE_EVENTS_WITH_SEARCHBAR';
export const FETCH_ALL_EVENTS = 'FETCH_ALL_EVENTS';
export const SAVE_ALL_EVENTS = 'SAVE_ALL_EVENTS';
// === action creators
export const fetchEventsByGenre = (id) => ({
  type: FETCH_EVENTS_BY_GENRE,
  id,
});

export const saveEventsByGenre = (data, results) => ({
  type: SAVE_EVENTS_BY_GENRE,
  data,
  results,
});

export const fetchDetailEvent = (id) => ({
  type: FETCH_DETAIL_EVENT,
  id,
});
export const saveDetailEvent = (data) => ({
  type: SAVE_DETAIL_EVENT,
  data,
});
export const fetchEventsOnHomepage = () => ({
  type: FETCH_EVENTS_ON_HOMEPAGE,
});
export const saveEventsOnHomepage = (events) => ({
  type: SAVE_EVENTS_ON_HOMEPAGE,
  events,
});

export const fetchEventsByRegion = (id, results) => ({
  type: FETCH_EVENTS_BY_REGION,
  id,
  results,
});

export const saveEventsByRegion = (data) => ({
  type: SAVE_EVENTS_BY_REGION,
  data,
});
export const fetchEventsWithSearchBar = (regionId, genreId) => ({
  type: FETCH_EVENTS_WITH_SEARCHBAR,
  regionId,
  genreId,
});
export const saveEventsWithSearchBar = (data) => ({
  type: SAVE_EVENTS_WITH_SEARCHBAR,
  data,
});
export const fetchAllEvents = () => ({
  type: FETCH_ALL_EVENTS,
});
export const saveAllEvents = (data) => ({
  type: SAVE_ALL_EVENTS,
  data,
});
