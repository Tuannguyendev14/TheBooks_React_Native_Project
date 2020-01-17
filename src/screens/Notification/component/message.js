import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
  TouchableWithoutFeedback,
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/thebook-appicon';
import {applyMiddleware} from 'redux';

class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Icon
            style={styles.icon}
            name="ic-notification-1"
            size={25}
            color="#ffffff"
          />
        </View>
        <View style={styles.right}>
          <View style={styles.row_title}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.date}>{this.props.date}</Text>
          </View>
          <View style={styles.descript}>
            <Text style={styles.detail}>{this.props.detail}</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    // borderRadius: 18,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  left: {
    padding: 5,
    borderRadius: 50,
    borderColor: '#f5a623',
    backgroundColor: '#f5a623',
    borderWidth: 2,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf: 'center',
  },
  right: {
    flex: 7,
  },
  title: {
    color: '#4a4a4a',
    fontSize: 23,
    flex: 1,
  },
  date: {
    fontSize: 17,
    color: '#ababab',
    //alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  row_title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detail: {
    color: '#7f7f7f',
    fontSize: 17,
  },
});
export default Message;
