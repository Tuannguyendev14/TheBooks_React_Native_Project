import React, {Component} from 'react';
import {onSignUp} from './../../navigation';
import {connect} from 'react-redux';
import {logIn} from '../../redux/userRedux/actions';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Input from '../../component/Input';
import IconLogin from '../../../assets/images/Intro/slide1.png';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      grant_type: 'password',
      userName: '',
      // userName: 'tuan.nguyen.106902@gmail.com',
      password: '',
    };
  }

  onRestart = () => {
    this.setState({
      errorEmail: '',
      errorPassword: '',
    });
  };

  onSignUp = () => {
    onSignUp();
  };

  onSignin = event => {
    var {userName, password} = this.state;
    this.onRestart();

    if (userName === '') {
      this.setState({errorUserName: 'Nhập tên tài khoản!'});
    }
    if (password === '') {
      this.setState({errorPassword: 'Nhập password!'});
    }
    if (password.length < 8) {
      this.setState({errorPassword: 'Pasword không hợp lệ!'});
    }
    if (password.length > 64) {
      this.setState({errorPassword: 'Pasword không hợp lệ!'});
    } else {
      var user = {
        grant_type: this.state.grant_type,
        username: this.state.userName,
        password: this.state.password,
      };
      // console.log(user);

      this.props.onLogInUser(user);
    }
  };

  getData = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    var {errorUserName, errorPassword} = this.state;
    return (
      <ScrollView style={style.styleScroll}>
        <View style={style.styleViewImage}>
          <Image style={style.styleImage} source={IconLogin} />
        </View>

        <View style={style.styleViewInput}>
          <Input
            getData={e => this.getData('userName', e)}
            title="Tài khoản*"
            placeholder="Nhập tài khoản..."
            autoCorrect={false}
            keyboardType="email-address"
            // onSubmitEditing={() => this.ref.txtPassword.focus()}
            error={errorUserName}
          />
          <Input
            getData={e => this.getData('password', e)}
            title="Mật khẩu*"
            placeholder="Nhập mật khẩu..."
            error={errorPassword}
            returnKeyType="go"
            secureTextEntry={true}
            autoCorrect={false}
            ref={'txtPassword'}
            // value={this.state.password}
          />
        </View>

        <View style={style.styleLoginButton}>
          <TouchableWithoutFeedback onPress={this.onSignin}>
            <Text
              style={{
                ...style.button,
                backgroundColor: '#2bb6f9',
                borderColor: 'blue',
                color: 'white',
              }}>
              Đăng nhập
            </Text>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={this.onSignUp}>
            <Text
              style={{
                ...style.button,
                backgroundColor: 'white',
                borderColor: 'blue',
                color: 'gray',
              }}>
              Đăng kí
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={style.styleViewText}>
          <TouchableWithoutFeedback onPress={this.onSignUp}>
            <Text style={style.styleButtonSignUp}>Quên mật khẩu?</Text>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  button: {
    borderWidth: 1.5,
    borderRadius: 12,
    fontSize: 24,
    fontWeight: 'bold',
    padding: 12,
    textAlign: 'center',
    flex: 1,
    margin: 10,
  },
  styleImage: {
    width: '100%',
    height: 300,
  },
  styleScroll: {
    flex: 1,
  },
  styleViewImage: {
    flex: 2,
    margin: 3,
  },
  styleViewInput: {
    flex: 2,
    margin: 10,
  },
  styleLoginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  styleViewText: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 30,
    marginBottom: 50,
  },
  styleButtonSignUp: {
    color: 'gray',
    fontSize: 20,
  },
});

const mapStateToProps = state => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onLogInUser: user => {
      dispatch(logIn(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
