import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {Colors} from '../../themers';

export default class IntroViewer extends React.PureComponent {
  test = () => {
    alert('ok');
  };

  render() {
    const {data} = this.props;
    return (
      <View style={styles.slide}>
        <Image source={data.imageSource} style={styles.image} />

        <Text
          type="regular"
          color={Colors.black}
          sizeType="xMedium"
          style={{...styles.text, fontWeight: 'bold', fontSize: 21}}>
          {data.title}
        </Text>

        <Text
          type="regular"
          color={Colors.black}
          sizeType="xMedium"
          style={{...styles.text, color: Colors.darkGray, fontSize: 19}}>
          {data.description}
        </Text>

        <View style={styles.startButton}>
          {/* <TouchableWithoutFeedback onPress={this.onLogin}>
            <Text style={styles.button}>Login</Text>
          </TouchableWithoutFeedback> */}
          <Text type="regular" style={styles.button}>
            {data.text}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingHorizontal: 15,
    marginTop: 30,
    textAlign: 'center',
    fontFamily: 'Roboto-Thin',
  },
  image: {
    borderRadius: 50,
    height: 200,
    width: 200,
  },
  startButton: {
    height: 90,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
    flexDirection: 'row',
  },
  button: {
    borderWidth: 1.5,
    padding: 12,

    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#2bb6f9',
    margin: 10,
    borderColor: 'blue',
    borderRadius: 12,
    textAlign: 'center',
  },
});
