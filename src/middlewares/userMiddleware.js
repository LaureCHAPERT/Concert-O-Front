import axios from 'axios';
import jwt from 'jwt-decode';

import { LOG_IN, saveUserData } from '../actions/user';

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
          console.log(user.username);
          store.dispatch(saveUserData(user.username, response.data.token));
        })
        .catch((error) => {
          // TODO afficher une erreur à l'utilisateur
          console.log(error);
        });
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default userMiddleware;
