// import actions
import { SAVE_REGIONS } from '../actions/regions';

const initialState = {
  regionsList: [],
};

const regions = (state = initialState, action = {}) => {
  console.log(`the regions reducer received an action ${action.type}`);
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

    default:
      return state;
  }
};

export default regions;
