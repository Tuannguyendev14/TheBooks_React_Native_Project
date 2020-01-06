/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';
import ahiih from './src/screens/Login';
import Home from './src/screens/Home';
import Search from './src/screens/Home/Search';

Navigation.registerComponent('App', () => ahiih);
Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Search', () => Search);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Search',
      },
    },
  });
});
