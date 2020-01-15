import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  AsyncStorage,
  FlatList,
  ImageBackground,
} from 'react-native';
import {onSignIn} from '../../navigation';
import {connect} from 'react-redux';
import {logOut} from '../../redux/userRedux/actions';
import iconProfile from '../../../assets/images/Home/imageLibrary.png';
import iconLibrary from '../../../assets/images/Home/library.jpg';
import Icon from 'react-native-vector-icons/thebook-appicon';
import Book from '../../component/Book';
import {Navigation} from 'react-native-navigation';

var ScrollableTabView = require('react-native-scrollable-tab-view');

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      phoneNumber: '',
      gender: '',
    };
  }

  onLogOut = () => {
    this.props.onLogOutUser();
    onSignIn();
    this.removeEverything();
  };

  removeEverything = async () => {
    try {
      await AsyncStorage.clear();
      alert('Log out successfully!');
    } catch (e) {
      alert('Logout failed');
    }
  };

  componentDidMount() {
    this.onCheck();
  }

  onCheck = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);

      // console.log(username, email, phoneNumber, gender);

      if (parsed) {
        let fullName = parsed.Data.FullName;
        let email = parsed.Data.Email;
        let phoneNumber = parsed.Data.PhoneNumber;
        let gender = parsed.Data.Gender;
        this.setState({
          fullName: fullName,
          email: email,
          phoneNumber: phoneNumber,
          gender: gender,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  onPress = () => {
    Navigation.mergeOptions('sideMenu', {
      sideMenu: {
        right: {
          visible: true,
        },
      },
    });
  };

  render() {
    const {fullName, email, gender, phoneNumber} = this.state;
    const newBooks = this.props.book.data.NewBooks;
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={iconProfile}
          style={{width: '100%', height: 500}}>
          <View
            style={{
              alignItems: 'center',
              marginHorizontal: 30,
              marginVertical: 10,
            }}>
            <Text style={{color: 'white', fontSize: 30}}>The Books</Text>
            <Text style={{color: 'white', fontSize: 15, marginTop: 10}}>
              www.thebook.com
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                textAlign: 'center',
                marginTop: 10,
              }}>
              Think back over your life. Think about the people that had a
              positive influence on you. If your past ...
            </Text>
            <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
              Think back over your life
            </Text>
          </View>
          <View style={style.viewIcon}>
            <View style={style.iconButton}>
              <Icon name="ic-instagram" size={30} color="white" />
            </View>
            <View style={style.iconButton}>
              <Icon name="ic-facebook" size={30} color="white" />
            </View>
            <View style={style.iconButton}>
              <Icon name="ic-youtube" size={30} color="white" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <View style={style.iconButton}>
              <Text>OPEN</Text>
              <Text>8am</Text>
            </View>
            <View style={style.iconButton}>
              <Image
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 90,
                  borderWidth: 3,
                  borderColor: 'white',
                }}
                source={iconLibrary}
              />
            </View>
            <View style={style.iconButton}>
              <Text>CLOSE</Text>
              <Text>6pm</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: 'white',
                width: 190,
                height: 70,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 5,
              }}>
              <View
                style={{
                  borderWidth: 2,
                  borderColor: 'white',
                  padding: 10,
                  borderRadius: 50,
                }}>
                <Icon name="ic-phone" size={20} color="white" />
              </View>
              <View style={{marginLeft: 6}}>
                <Text style={{color: 'white'}}>Phone</Text>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  (+84) 000 00 000)
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: 'white',
                width: 190,
                height: 70,
                borderRadius: 50,
                justifyContent: 'center',
                marginHorizontal: 5,
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderWidth: 2,
                  borderColor: 'white',
                  padding: 10,
                  borderRadius: 50,
                }}>
                <Icon name="ic-solid-direction" size={20} color="white" />
              </View>
              <View style={{marginLeft: 6}}>
                <Text style={{color: 'white'}}>Address</Text>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  20 Cao Thắng
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const style = StyleSheet.create({
  topbar: {
    paddingLeft: 15,
    paddingTop: 20.5,
    fontSize: 10.5,
    flexDirection: 'row',
    marginHorizontal: 10,
  },

  styleViewProfile: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: -80,
  },
  styleImageProfile: {
    width: '100%',
    height: 500,
  },
  list: {
    paddingTop: 5,
  },
  platinum: {
    flexDirection: 'row',
    flex: 3,
    backgroundColor: '#f7f3f7',
    borderRadius: 50,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewInfor: {
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  viewItemText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  viewCode: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 50,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPlatinum: {
    margin: 18,
    fontSize: 22,
  },
  viewIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 100,
  },
  iconButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    userData: state.user,
    book: state.bookReducer,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onLogOutUser: () => {
      dispatch(logOut());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
