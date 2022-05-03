import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  SAVE_USER_DATA,
  LOG_OUT,
  SET_ERROR_MESSAGE,
  CHANGE_PSEUDO,
} from '../actions/user';

export const initialState = {

  email: '',
  password: '',
  username: '',
  token: localStorage.getItem('token'),
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
    case CHANGE_PSEUDO:
      return {
        ...state,
        username: action.value,
      };
    case SAVE_USER_DATA:
      return {
        ...state,
        username: action.nickname,
        token: action.token,
      };
    case LOG_OUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: localStorage.getItem('token'),
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
export default user;
