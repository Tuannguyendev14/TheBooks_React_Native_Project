import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import IntroViewer from './introViewer';
import {Swiper, TouchableButton} from '../../component';
import {Colors, Metrics} from '../../themers';

import introData from '../../utils/dataSlide';
import {onChangeIntoMainScreen} from '../../navigation';

const {width} = Dimensions.get('window');

class Intro extends Component {
  static options(passProps) {
    return {
      topBar: {
        visible: false,
        drawBehind: true,
      },
    };
  }


  componentDidMount() {
    if (this.state.key === 2) {
      this.setState({
        isShowButton: true,
      });
    } else {
      this.setState({
        isShowButton: false,
      });
    }
    console.log(this.state.key);
  }

  onPressed = () => {
    onChangeIntoMainScreen();
  };


  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.topContainer}>
          <Swiper
            style={styles.wrapper}
            activeDotColor={Colors.info}
            // autoplay
          >
            {introData.map(item => {
              return <IntroViewer data={item} key={item.id} />;
            })}
          </Swiper>
        </View>
        {/* <View style={{flex: 1, backgroundColor: Colors.white}} /> */}
        <View style={styles.bottomContainer} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default Intro;

const styles = StyleSheet.create({
  wrapper: {},
  button: {
    width: (Metrics.screenWidth - 30) / 2,
    borderRadius: 50,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-around',
  },
  topContainer: {
    flex: 8,
    backgroundColor: Colors.white,
  },
});
