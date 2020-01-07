import React from 'react';
import {Navigation} from 'react-native-navigation';
import Filter from './../screens/Filter/Filter';

import store from '../redux/store';

function ReduxProvider(Component) {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

Navigation.registerComponent(`Filter`, () => Filter);

export const FilterScreen = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Filter',
        options: {
          topBar: {
            title: {
              text: 'Filter',
            },
          },
        },
      },
    });
  });
};
