// changer la valeur de l'un des champs du formulaire de login
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_PASSWORD_CONFIRMATION = 'CHANGE_PASSWORD_CONFIRMATION';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PSEUDO = 'CHANGE_PSEUDO';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const SET_FLASH_MESSAGE_FOR_SUBSCRIBE = 'SET_FLASH_MESSAGE_FOR_SUBSCRIBE';
export const SET_FLASH_MESSAGE_FOR_CONNEXION = 'SET_FLASH_MESSAGE_FOR_CONNEXION';
export const CREATE_USER = 'CREATE_USER';
export const changePassword = (newValue) => ({
  type: CHANGE_PASSWORD,
  value: newValue,
});
export const changePasswordConfirmation = (newValue) => ({
  type: CHANGE_PASSWORD_CONFIRMATION,
  value: newValue,
});
export const changeEmail = (newValue) => ({
  type: CHANGE_EMAIL,
  value: newValue,
});
export const changePseudo = (newValue) => ({
  type: CHANGE_PSEUDO,
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
export const setFlashMessageForSubscribe = (flashMessage) => ({
  type: SET_FLASH_MESSAGE_FOR_SUBSCRIBE,
  flashMessage: flashMessage,
});
export const setFlashMessageForConnexion = (flashMessage) => ({
  type: SET_FLASH_MESSAGE_FOR_CONNEXION,
  flashMessage: flashMessage,
});
export const createUser = () => ({
  type: CREATE_USER,
});
