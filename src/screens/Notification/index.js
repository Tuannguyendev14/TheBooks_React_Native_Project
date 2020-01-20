import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
  TouchableWithoutFeedback,
  ScrollView,
  Alert,
} from 'react-native';
import Message from './component/message';
import {onSignIn} from '../../navigation';
import AwesomeAlert from 'react-native-awesome-alerts';
import {connect} from 'react-redux';
import {getNotification} from '../../redux/notificationRedux/action';
import {notiData} from '../../utils/notificationData';
import Icon from 'react-native-vector-icons/thebook-appicon';
class index extends Component {
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
      console.log('parsed:', parsed);
      if (parsed === null) {
        onSignIn();
      } else {
        let data = {
          isDelete: true,
          pageNumber: 1,
          pageSize: 1,
          sortBy: 'title',
          sortDesc: true,
          isSeen: true,
          userId: parsed.Data.Id,
        };
        this.getNoti(data, parsed.Token.access_token);
        //this.changShopping(idbasket, parsed.Token.access_token);
      }
    } catch (error) {
      alert(error);
    }
  };
  getNoti = (data, token) => {
    this.props.onGetNotification(data, token);
  };
  constructor(props) {
    super(props);
    this.state = {showAlert: false};
  }
  render() {
    const {showAlert} = this.state;
    //const noti = this.props.notification;
    console.log('noti', notiData);
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.noti}>Thông báo</Text>
        </View>
        <View style={styles.bot}>
          <ScrollView>
            <FlatList
              style={styles.list}
              data={notiData}
              renderItem={({item}) => (
                <Message
                  date={item.date}
                  detail={item.detail}
                  title={item.title}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  noti: {
    color: '#4a4a4a',
    paddingTop: 15,
    fontSize: 33,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    flex: 1,
  },
  bot: {
    flex: 9,
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: '#AEDEF4',
  },
  text: {
    color: '#fff',
    fontSize: 15,
  },
});
const mapStateToProps = state => {
  //console.log('noti', state.notificationReducer);
  return {
    notification: state.notificationReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetNotification: (data, token) => dispatch(getNotification(data, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
