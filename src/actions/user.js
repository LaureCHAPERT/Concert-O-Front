// changer la valeur de l'un des champs du formulaire de login
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const changePassword = (newValue) => ({
  type: CHANGE_PASSWORD,
  value: newValue,
});
export const changeEmail = (newValue) => ({
  type: CHANGE_EMAIL,
  value: newValue,
});
export const logIn = () => ({
  type: LOG_IN,
});
export const logOut = () => ({
  type: LOG_OUT,
});
export const saveUserData = (nickname, token) => ({
  type: SAVE_USER_DATA,
  nickname: nickname,
  token: token,
});
export const setErrorMessage = (errorMessage) => ({
  type: SET_ERROR_MESSAGE,
  errorMessage: errorMessage,
});
