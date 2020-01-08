import React from 'react';
import {Navigation} from 'react-native-navigation';
import Filter from '../screens/Filter/Filter';

Navigation.registerComponent('App', () => Filter);

export const FilterScreen = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'App',
        },
      },
    });
  });
};
