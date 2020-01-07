/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';
import ahiih from './src/screens/Login';

Navigation.registerComponent('App', () => ahiih);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'App',
      },
    },
  });
});
