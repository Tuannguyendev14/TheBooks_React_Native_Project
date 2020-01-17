import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';

export default class personalInfor extends Component {
  render() {
    const {lable, value} = this.props;
    return (
      <View style={style.view}>
        <View style={{flex: 1}}>
          <Text style={style.text}>{lable}</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={style.text}>{value}</Text>
        </View>
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
  view: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    height: 70,
    marginHorizontal: 20,
    alignItems: 'center',
    borderBottomColor: '#b3acac',
  },
  text: {
    fontSize: 15,
    color: '#5f5f5f',
  },
});
