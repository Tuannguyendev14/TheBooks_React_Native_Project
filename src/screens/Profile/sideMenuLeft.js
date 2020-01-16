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
import ImageProfile from '../../../assets/images/profile-icon.png';
import AwesomeAlert from 'react-native-awesome-alerts';

export default class SideMenuLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: '',
      isShowInfor: false,
      showAlert: false,
    };
  }

  componentDidMount() {
    this.onCheck();
  }

  showAlert = () => {
    this.setState({
      showAlert: true,
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
    });
  };

  onCheck = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);

      if (parsed) {
        let userName = parsed.Data.FullName;
        this.setState({
          UserName: userName,
          isShowInfor: true,
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  onSetting = () => {
    alert('ok');
  };

  onSignOut = () => {
    this.showAlert();
  };

  onSignIn = () => {
    onSignIn();
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
    const ShowButton = this.state.isShowInfor ? (
      <TouchableWithoutFeedback onPress={this.onSignOut}>
        <Text style={styles.titleOption}>Đăng Xuất</Text>
      </TouchableWithoutFeedback>
    ) : (
      <TouchableWithoutFeedback onPress={this.onSignIn}>
        <Text style={styles.titleOption}>Đăng Nhập</Text>
      </TouchableWithoutFeedback>
    );

    const showImageProfile = this.state.isShowInfor ? (
      <Image source={ImageProfile} style={styles.styleImageProfile} />
    ) : (
      <Text />
    );

    const showTabInforPerson = this.state.isShowInfor ? (
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
    ) : (
      <Text />
    );

    const showTabChangePass = this.state.isShowInfor ? (
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
    ) : (
      <Text />
    );

    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <SafeAreaView>
          <View style={styles.header}>
            <Text style={styles.title}>Cài đặt thông tin</Text>
          </View>

          <ScrollView>
            <View style={styles.container}>
              <View style={styles.styleViewProfile}>
                {showImageProfile}
                <Text style={{fontSize: 25}}>{UserName}</Text>
              </View>
              {showTabInforPerson}
              {showTabChangePass}
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
                <View style={{flex: 5}}>{ShowButton}</View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
        <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          title="Bạn cần đăng nhập để thực hiện chức năng này"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Quay lại"
          confirmText="Đăng xuất"
          confirmButtonColor="#1d9dd8"
          cancelButtonColor="#70f1cc"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            onSignIn();
            this.removeEverything();
          }}
        />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
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
