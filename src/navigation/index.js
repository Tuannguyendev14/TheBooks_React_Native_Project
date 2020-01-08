import React from 'react';
import {Navigation} from 'react-native-navigation';
import App from '../../App';
import Home from '../screens/Home/index';
import Icon1 from 'react-native-vector-icons/thebook-appicon';
import Book from '../component/Book';
import Search from '../screens/Home/Search';
import ShowAllBook from '../screens/Home/ShowAllBook';

import Order from '../screens/Order';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import Intro from '../screens/Intro';
import Library from '../screens/Library';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

import iconPaper from '../../assets/images/paper_icon.jpg';
import iconNotification from '../../assets/images/notification_icon.png';
import iconLibrary from '../../assets/images/library_icon.jpg';
import books_icon from '../../assets/images/books_icon.png';
import profile_icon from '../../assets/images/profile_icon.png';
import {Provider} from 'react-redux';
import store from '../redux/store';
import {prepareIcons} from '../utils/icon';
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
          name: 'App',
        },
      },
    });
  });
};

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
  'ShowAllBook',
  () => ReduxProvider(ShowAllBook),
  () => ShowAllBook,
);
Navigation.registerComponent(
  'App',
  () => ReduxProvider(App),
  () => App,
);
Navigation.registerComponent(
  'Intro',
  () => ReduxProvider(Intro),
  () => Intro,
);
Navigation.registerComponent(
  'Library',
  () => ReduxProvider(Library),
  () => Library,
);
Navigation.registerComponent(
  'Order',
  () => ReduxProvider(Order),
  () => Order,
);
Navigation.registerComponent(
  'Notification',
  () => ReduxProvider(Notification),
  () => Notification,
);
Navigation.registerComponent(
  'Profile',
  () => ReduxProvider(Profile),
  () => Profile,
);
Navigation.registerComponent(
  'SignIn',
  () => ReduxProvider(SignIn),
  () => SignIn,
);
Navigation.registerComponent(
  'SignUp',
  () => ReduxProvider(SignUp),
  () => SignUp,
);
export const onChangeIntoMainScreen1 = async function() {
  console.log('click on chang');
  const icons = await prepareIcons();
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                    options: {
                      topBar: {
                        title: {
                          text: '',
                          alignment: 'center',
                        },
                        visible: false,
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Home',
                  icon: icons.first,
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
                  icon: iconPaper,
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
                    name: 'Library',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Library',
                  icon: iconPaper,
                  testID: 'FOUR_TAB_BAR_BUTTON',
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
                  icon: iconPaper,
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
                    name: 'Home',
                    options: {
                      topBar: {
                        title: {
                          text: '',
                          alignment: 'center',
                        },
                        visible: false,
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Home',
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
                  icon: profile_icon,
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
                    name: 'Library',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Library',
                  icon: iconNotification,
                  testID: 'FOUR_TAB_BAR_BUTTON',
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
                  icon: iconLibrary,
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
