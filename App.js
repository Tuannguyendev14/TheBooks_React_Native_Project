import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator, AsyncStorage} from 'react-native';
import {onIntro, onChangeIntoMainScreen} from './src/navigation';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.onCheck();
  }

  onCheck = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);
      if (parsed) {
        onChangeIntoMainScreen();
      } else {
        onIntro();
      }
    } catch (error) {
      // alert(error);
    }
  };

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

export default App;
