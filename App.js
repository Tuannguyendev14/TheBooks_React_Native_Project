import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import {onIntro} from './src/navigation';

export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // onChangeIntoMainScreen();
    onIntro();
  }

  componentWillMount() {
    setTimeout(() => {}, 3000);
  }

  render() {
    return (
      <View style={style.container}>
        <ActivityIndicator size="large" color="red " />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
