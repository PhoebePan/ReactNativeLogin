/* @flow */

import {StackNavigator, NavigationActions} from 'react-navigation';

import Home from '../components/home';
import Settings from '../components/settings';
import Login from '../components/login';

export const MainStack = StackNavigator({
  Home: {
    screen: Home
  },
  Settings: {
    screen: Settings
  }
});

export const LoginStack = StackNavigator({
  Login: {
    screen: Login
  }
});

const navigateOnce = (getStateForAction) => (action, state) => {
  const {type, routeName} = action;
  return (state && type === NavigationActions.NAVIGATE && routeName === state.routes[state.routes.length - 1].routeName)
    ? null
    : getStateForAction(action, state);
  // you might want to replace 'null' with 'state' if you're using redux (see comments below)
};

MainStack.router.getStateForAction = navigateOnce(MainStack.router.getStateForAction);
LoginStack.router.getStateForAction = navigateOnce(LoginStack.router.getStateForAction);
