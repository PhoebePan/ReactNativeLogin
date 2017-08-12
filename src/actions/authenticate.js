/* @flow */

import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from '../config/strings';

export function login(username, password) {
  console.log('login', `${username}:${password}`);
  return {type: LOGIN_SUCCESS, data: {
      username
    }};
}

export function logout() {
  return {type: LOGOUT_SUCCESS};
  console.log('logout');
}
