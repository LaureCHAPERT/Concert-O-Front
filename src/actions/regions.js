// === action types
export const FETCH_REGIONS = 'FETCH_REGIONS';
export const SAVE_REGIONS = 'SAVE_REGIONS';

// === action creators
export const fetchRegions = () => ({
  type: FETCH_REGIONS,
});

export const saveRegions = (regions) => ({
  type: SAVE_REGIONS,
  regions: regions,
});
