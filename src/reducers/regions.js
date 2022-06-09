// import actions
import { SAVE_REGIONS, SET_SELECTED_REGION_ID } from '../actions/regions';

const initialState = {
  regionsList: [],
  selectedRegionID: undefined,
};

const regions = (state = initialState, action = {}) => {
  // console.log(`the regions reducer received an action ${action.type}`);
  switch (action.type) {
    case SAVE_REGIONS:
      /*
      - creating a new object: {}
      - dumping all the information of the current state into it: ...state
      - overwriting value from the current state
      */
      return {
        ...state, // regions: state.regions
        regionsList: action.regions,
      };

    case SET_SELECTED_REGION_ID:
      return {
        ...state,
        selectedRegionID: action.selectedID,
      };

    default:
      return state;
  }
};

export default regions;
