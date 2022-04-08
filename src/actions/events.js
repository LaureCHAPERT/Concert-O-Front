export const FETCH_EVENTS_BY_REGION = 'FETCH_EVENTS_BY_REGION';
export const SAVE_EVENTS_BY_REGION = 'SAVE_EVENTS_BY_REGION';

export const fetchEventsByRegion = (id) => ({
  type: FETCH_EVENTS_BY_REGION,
  id,
});

export const saveEventsByRegion = (data) => ({
  type: SAVE_EVENTS_BY_REGION,
  data,
});
