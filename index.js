/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';
import ahiih from './src/screens/Login';

import Filter from './src/screens/Filter/Filter';
import Filter2 from './src/screens/Filter/Filter2';

Navigation.registerComponent('App', () => Filter);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'App',
      },
    },
  });
});
