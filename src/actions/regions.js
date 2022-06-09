// === action types
export const FETCH_REGIONS = 'FETCH_REGIONS';
export const SAVE_REGIONS = 'SAVE_REGIONS';
export const SET_SELECTED_REGION_ID = 'SET_SELECTED_REGION_ID';

// === action creators
export const fetchRegions = () => ({
  type: FETCH_REGIONS,
});

export const saveRegions = (regions) => (
  {
    type: SAVE_REGIONS,
    regions: regions,
  }
);
export const setSelectedRegionId = (selectedID) => (
  {
    type: SET_SELECTED_REGION_ID,
    selectedID,
  }
);
