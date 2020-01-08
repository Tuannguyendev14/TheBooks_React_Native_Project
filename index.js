/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';

import Filter from './src/screens/Filter/Filter';
import Filter2 from './src/screens/Filter/Filter2';

Navigation.registerComponent('App', () => Filter2);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'App',
      },
    },
  });
});
