/* @flow */
import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from '../config/redux-events';

const initialState = {
  isAuth: false,
  authUser: null
};

export default function authenticate(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        authUser: action.data.username
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
        authUser: null
      };
    default:
      return state;
  }
}
