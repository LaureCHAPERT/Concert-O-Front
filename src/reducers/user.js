import { CHANGE_EMAIL, CHANGE_PASSWORD, SAVE_USER_DATA } from '../actions/user';

export const initialState = {

  email: '',
  password: '',
  username: '',
  token: null,
  errorMessage: '',
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
    case SAVE_USER_DATA:
      return {
        ...state,
        username: action.nickname,
        token: action.token,
      };
    default:
      return state;
  }
};
export default user;
