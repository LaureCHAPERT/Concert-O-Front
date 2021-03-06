import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_CONFIRMATION,
  SAVE_USER_DATA,
  LOG_OUT,
  SET_FLASH_MESSAGE_FOR_CONNEXION,
  SET_FLASH_MESSAGE_FOR_SUBSCRIBE,
  CHANGE_PSEUDO,
} from '../actions/user';

export const initialState = {

  email: '',
  password: '',
  passwordConfirmation: '',
  username: '',
  token: localStorage.getItem('token'),
  flashMessage: '',
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
    case CHANGE_PASSWORD_CONFIRMATION:
      return {
        ...state,
        passwordConfirmation: action.value,
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
    case SET_FLASH_MESSAGE_FOR_CONNEXION:
      return {
        ...state,
        errorMessage: action.flashMessage,
      };
    case SET_FLASH_MESSAGE_FOR_SUBSCRIBE:
      return {
        ...state,
        flashMessage: action.flashMessage,
      };
    default:
      return state;
  }
};
export default user;
