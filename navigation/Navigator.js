import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AuthScreen from '../screens/AuthScreen';
import Home from '../screens/Home';

const HomeNavigator = createStackNavigator({
  Home: Home
});
const AuthNavigator = createStackNavigator({
  Auth: AuthScreen
});
const mainNavigator = createSwitchNavigator({
  AuthScreen: AuthNavigator,
  Shop: HomeNavigator
});
export default createAppContainer(mainNavigator);
