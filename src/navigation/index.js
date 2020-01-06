import React from 'react';
import {Navigation} from 'react-native-navigation';
import App from '../../App';
import Home from '../screens/Home';
import Book from '../component/Book';
import Search from '../component/Search';

function ReduxProvider(Component) {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export default () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'Search',
        },
      },
    });
  });

  Navigation.registerComponent(
    'Search',
    () => ReduxProvider(Search),
    () => Search,
  );
  Navigation.registerComponent(
    'Home',
    () => ReduxProvider(Home),
    () => Home,
  );
  Navigation.registerComponent(
    'Book',
    () => ReduxProvider(Book),
    () => Book,
  );
};
