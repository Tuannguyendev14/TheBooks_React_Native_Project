import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  BackHandler,
  Picker,
  ScrollView,
  SafeAreaView,
  AsyncStorage,
  TouchableWithoutFeedback,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import {List} from 'react-native-paper';
import IconProfile from '../../../assets/images/Home/anh.jpg';
import Icon from 'react-native-vector-icons/thebook-appicon';
import {onSignIn} from '../../navigation';

export default class SideMenuLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: '',
    };
  }

  componentDidMount() {
    this.onCheck();
  }

  onCheck = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);

      let userName = parsed.Data.FullName;
      this.setState({
        UserName: userName,
      });
    } catch (error) {
      alert(error);
    }
  };

  onSetting = () => {
    alert('ok');
  };

  onSignOut = () => {
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

  render() {
    const UserName = this.state.UserName;

    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <SafeAreaView>
          <View style={styles.header}>
            <View style={styles.back}>
              <TouchableOpacity
                onPress={Navigation.dismissModal(this.props.componentId)}>
                <Icon name="ic-back" size={20} color="#5f5f5f" />
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', flex: 3}}>
              <Text style={styles.title}>Cài đặt thông tin</Text>
            </View>
          </View>

          <ScrollView>
            <View style={styles.container}>
              <View style={styles.styleViewProfile}>
                <Image source={IconProfile} style={styles.styleImageProfile} />
                <Text style={{fontSize: 25}}>{UserName}</Text>
              </View>
              <View style={styles.viewRow}>
                <View style={styles.viewIcon}>
                  <Icon name="ic-profile" size={30} color="#979797" />
                </View>
                <View style={{flex: 5}}>
                  <TouchableWithoutFeedback onPress={this.onSetting}>
                    <Text style={styles.titleOption}>Thông tin cá nhân</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <View style={styles.viewRow}>
                <View style={styles.viewIcon}>
                  <Icon name="ic-password" size={30} color="#979797" />
                </View>
                <View style={{flex: 5}}>
                  <TouchableWithoutFeedback onPress={this.onSetting}>
                    <Text style={styles.titleOption}>Đổi mật khẩu</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <View style={styles.viewRow}>
                <View style={styles.viewIcon}>
                  <Icon name="ic-help" size={30} color="#979797" />
                </View>
                <View style={{flex: 5}}>
                  <TouchableWithoutFeedback onPress={this.onSetting}>
                    <Text style={styles.titleOption}>Hỗ trợ</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <View style={styles.viewRow}>
                <View style={styles.viewIcon}>
                  <Icon name="ic-feedback" size={30} color="#979797" />
                </View>
                <View style={{flex: 5}}>
                  <TouchableWithoutFeedback onPress={this.onSetting}>
                    <Text style={styles.titleOption}>Phản hồi</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <View style={styles.viewRow}>
                <View style={styles.viewIcon}>
                  <Icon name="ic-regulation" size={30} color="#979797" />
                </View>
                <View style={{flex: 5}}>
                  <TouchableWithoutFeedback onPress={this.onSetting}>
                    <Text style={styles.titleOption}>Quy định</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <View style={styles.viewRow}>
                <View style={styles.viewIcon}>
                  <Icon
                    name="ic-history-membership"
                    size={30}
                    color="#979797"
                  />
                </View>
                <View style={{flex: 5}}>
                  <TouchableWithoutFeedback onPress={this.onSetting}>
                    <Text style={styles.titleOption}>
                      Lịch sử nâng cấp thành viên
                    </Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <View style={styles.viewRow}>
                <View style={styles.viewIcon}>
                  <Icon name="ic-share" size={30} color="#979797" />
                </View>
                <View style={{flex: 5}}>
                  <TouchableWithoutFeedback onPress={this.onSetting}>
                    <Text style={styles.titleOption}>Chia sẻ</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <View style={styles.viewRow}>
                <View style={styles.viewIcon}>
                  <Icon name="ic-sign-out" size={30} color="#979797" />
                </View>
                <View style={{flex: 5}}>
                  <TouchableWithoutFeedback onPress={this.onSignOut}>
                    <Text style={styles.titleOption}>Đăng xuất</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginHorizontal: 16,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    height: 50,
  },
  container: {
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  titleOption: {
    fontSize: 20,
    marginTop: 4,
    borderBottomWidth: 1,
    marginVertical: 17,
    borderBottomColor: 'gray',
    color: 'gray',
  },
  viewRow: {
    flexDirection: 'row',
  },
  back: {
    flex: 1,
    justifyContent: 'center',
  },

  styleViewProfile: {
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  styleImageProfile: {
    borderRadius: 150,
    width: 200,
    height: 200,
  },
  viewIcon: {
    flex: 1,
    justifyContent: 'center',
  },
});
