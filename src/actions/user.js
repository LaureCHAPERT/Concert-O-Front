// changer la valeur de l'un des champs du formulaire de login
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const changePassword = (newValue) => ({
  type: CHANGE_PASSWORD,
  value: newValue,
});
export const changeEmail = (newValue) => ({
  type: CHANGE_EMAIL,
  value: newValue,
});
