import React from 'react';
import {Navigation} from 'react-native-navigation';
import App from '../../App';
import Home from '../screens/Home';

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
          name: 'Home',
        },
      },
    });
  });

  Navigation.registerComponent(
    'Home',
    () => ReduxProvider(Home),
    () => Home,
  );
};
