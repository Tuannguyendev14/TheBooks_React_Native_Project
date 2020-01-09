import React from 'react';
import {Navigation} from 'react-native-navigation';
import Filter from '../screens/Filter/Filter';
import Categories from '../screens/Filter/Categories';
import Sort from '../screens/Filter/Sort';

Navigation.registerComponent('Filter', () => Filter);
Navigation.registerComponent('Categories', () => Categories);
Navigation.registerComponent('Sort', () => Sort);

export const FilterScreen = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'Filter',
        },
      },
    });
  });
};

export const onCategories = () => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: 'Categories',
            options: {
              topBar: {
                title: {
                  text: 'item.title',
                  fontSize: 30,
                  alignment: 'center',
                },
              },
            },
          },
        },
      ],
    },
  });
};

// export const onSort = () => {
//   Navigation.showModal({
//     stack: {
//       children: [
//         {
//           component: {
//             name: 'Sort',
//             options: {
//               topBar: {
//                 visible: false,
//               },
//             },
//           },
//         },
//       ],
//     },
//   });
// };
