import { CHANGE_EMAIL, CHANGE_PASSWORD } from '../actions/user';

export const initialState = {

  email: '',
  password: '',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.value,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.value,
      };
    default:
      return state;
  }
};
export default user;
