import React from 'react';
import {Navigation} from 'react-native-navigation';
import Filter from '../screens/Filter/Filter';
import Categories from '../screens/Filter/Categories';

Navigation.registerComponent('App', () => Categories);

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
