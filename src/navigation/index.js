import React from 'react';
import { Navigation } from 'react-native-navigation';
import App from '../../App';



import Order from '../screens/Order';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import Intro from '../screens/Intro';

import iconPaper from '../../assets/images/paper_icon.jpg';
import iconNotification from '../../assets/images/notification_icon.png';
import iconHome from '../../assets/images/home_icon.jpg';
import books_icon from '../../assets/images/books_icon.png';

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

  Navigation.registerComponent('App', () => App);
  Navigation.registerComponent('Intro', () => Intro);

  Navigation.registerComponent('Books', () => Books);
  Navigation.registerComponent('Order', () => Order);
  Navigation.registerComponent('Notification', () => Notification);
  Navigation.registerComponent('Profile', () => Profile);
};

export const onChangeIntoMainScreen = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Books',
                    options: {
                      topBar: {
                        title: {
                          text: '',
                          alignment: 'center',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Books',
                  icon: books_icon,
                  testID: 'FIRST_TAB_BAR_BUTTON',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Order',
                    options: {
                      topBar: {
                        title: {
                          text: '',
                          alignment: 'center',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Order',
                  icon: iconPaper,
                  testID: 'SECOND_TAB_BAR_BUTTON',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Notification',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Notification',
                  icon: iconNotification,
                  testID: 'THIRST_TAB_BAR_BUTTON',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Profile',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Profile',
                  icon: iconHome,
                  testID: 'FOUR_TAB_BAR_BUTTON',
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const onIntro = () => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Intro',
        options: {
          topBar: {
            title: {
              text: 'Intro',
              alignment: 'center',
            },
          },
        },
      },
    },
  });
};

<<<<<<< HEAD
export const onSignIn = () => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'SignIn',
        options: {
          topBar: {
            title: {
              text: 'SignIn',
              alignment: 'center',
            },
          },
        },
      },
    },
  });
};

export const onSignUp = () => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'SignUp',
        options: {
          topBar: {
            title: {
              text: 'SignUp',
              alignment: 'center',
            },
          },
        },
      },
    },
  });

};
=======
// export const onLogIn = () => {
//   Navigation.setRoot({
//     root: {
//       component: {
//         name: 'Login',
//         options: {
//           topBar: {
//             title: {
//               text: 'Login',
//               alignment: 'center',
//             },
//           },
//         },
//       },
//     },
//   });
// };
>>>>>>> parent of 32e57fb... Tuan has finished into screens
