// import actions
import { SAVE_REGIONS } from '../actions/regions';

const initialState = {
  regions: [],
};
const regionsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_REGIONS:
      return {
        ...state, // regions: state.regions
        regions: action.regions,
      };

    default:
      return state;
  }
};

export default regionsReducer;
