import axios from 'axios';
import jwt from 'jwt-decode';

import {
  LOG_IN,
  saveUserData,
  setErrorMessage,
  CREATE_USER,
} from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN:
      axios.post(
        // URL
        'http://laure-chapert.vpnuser.lan:8000/api/login',
        // données
        {
          // ne pas oublier le nom du tiroir ;)
          email: store.getState().user.email,
          password: store.getState().user.password,
        },
      )
        .then((response) => {
          // eslint-disable-next-line prefer-destructuring
          const token = response.data.token;
          const user = jwt(token);
          console.log(user);
          localStorage.setItem('token', token);
          store.dispatch(saveUserData(user.username, response.data.token));
          store.dispatch(setErrorMessage(''));
        })
        .catch((error) => {
          if (error.response.status === 401) {
            const errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect, veuillez corrigez les informations saisies';
            store.dispatch(setErrorMessage(errorMessage));
          }
        });
      break;
    case CREATE_USER:
      axios.post(
        // URL
        'http://laure-chapert.vpnuser.lan:8000/api/user/create',
        // données
        {
          // ne pas oublier le nom du tiroir ;)
          email: store.getState().user.email,
          password: store.getState().user.password,
          username: store.getState().user.username,
        },
      )
        .then((response) => {
          // eslint-disable-next-line prefer-destructuring
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      break;
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default userMiddleware;
