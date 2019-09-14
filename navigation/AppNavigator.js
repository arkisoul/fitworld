import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

import MainTabNavigator from './MainTabNavigator';
import AuthTabNavigator from './AuthTabNavigator';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  AuthLoading: AuthLoadingScreen,
  Auth: AuthTabNavigator,
  Main: MainTabNavigator,
}, {
  initialRouteName: 'AuthLoading'
}));
