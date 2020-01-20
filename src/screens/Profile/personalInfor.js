import React, {Component} from 'react';
import {Text, View, StyleSheet, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import Infor from './components/infor';
import {Navigation} from 'react-native-navigation';

export default class personalInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      gender: '',
    };
  }

  componentDidMount() {
    this.onCheck();
  }

  onCheck = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);

      if (parsed) {
        let UserName = parsed.Data.FullName;
        let FirstName = parsed.Data.FirstName;
        let LastName = parsed.Data.LastName;
        let PhoneNumber = parsed.Data.PhoneNumber;
        let Email = parsed.Data.Email;
        let Gender = parsed.Data.Gender;

        this.setState({
          userName: UserName,
          firstName: FirstName,
          lastName: LastName,
          phoneNumber: PhoneNumber,
          email: Email,
          gender: Gender,
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  editInfor = () => {
    alert('Editting personal information');
  };

  onBack = () => {
    Navigation.dismissAllModals();
  };
  
  render() {
    const {
      userName,
      firstName,
      lastName,
      phoneNumber,
      email,
      gender,
    } = this.state;
    return (
      <View style={style.container}>
        <View style={style.topbar}>
          <View style={{flex: 1}}>
            <Icon
              name="ic-back"
              size={30}
              color="#5f5f5f"
              onPress={() => this.onBack()}
            />
          </View>
          <View style={{flex: 2, alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>Thông tin cá nhân</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Icon
              name="ic-pencil"
              size={30}
              color="#5f5f5f"
              onPress={() => this.editInfor()}
            />
          </View>
        </View>

        <Infor lable={'Họ'} value={lastName} />
        <Infor lable={'Tên'} value={firstName} />
        <Infor lable={'Số điện thoại'} value={phoneNumber} />
        <Infor lable={'Hộp thư'} value={email} />
        <Infor lable={'Giới tính'} value={gender} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
  },
  topbar: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 15,
  },
});
