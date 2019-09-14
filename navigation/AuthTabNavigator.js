import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/auth/HomeScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';

const AuthHomeStack = createStackNavigator({
  Home: HomeScreen,
}, {
  defaultNavigationOptions: {
    headerMode: 'none',
    header: null,
    headerStyle: {
      backgroundColor: 'transparent',
    },
    headerTintColor: 'transparent',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});

const AuthStack = createStackNavigator({
  Main: AuthHomeStack,
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
}, {
  mode: 'modal',
  header: null
});

export default AuthStack;
