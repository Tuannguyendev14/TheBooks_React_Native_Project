import React from 'react';
import {Navigation} from 'react-native-navigation';
import App from '../../App';
import Home from '../screens/Home';
import Book from '../component/Book';
import Search from '../screens/Home/Search';
import ShowAllBook from '../screens/Home/ShowAllBook';

export default () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'Home',
        },
      },
    });
  });

  Navigation.registerComponent('Search', () => Search);
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Book', () => Book);
  Navigation.registerComponent('ShowAllBook', () => ShowAllBook);
};
