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
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      isShowButton: false,
    };
  }
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
    var elm =
      this.state.key === 2 ? (
        <TouchableWithoutFeedback onPress={this.onPressed}>
          <Text type="regular" style={styles.button}>
            Bắt đầu
          </Text>
        </TouchableWithoutFeedback>
      ) : (
        ''
      );

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.topContainer}>
          <Swiper
            style={styles.wrapper}
            activeDotColor={Colors.info}
            onIndexChanged={index => this.setState({key: index})}>
            {introData.map(item => {
              return <IntroViewer data={item} key={item.id} />;
            })}
          </Swiper>
        </View>

        <View style={styles.startButton}>
          <Text style={{backgroundColor: 'white', padding: 10}}>{elm}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default Intro;

const styles = StyleSheet.create({
  wrapper: {},

  bottomContainer: {
    height: 90,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
    flexDirection: 'row',
  },
  topContainer: {
    flex: 3,
    backgroundColor: Colors.white,
  },
  startButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  button: {
    borderWidth: 1.5,
    padding: 13,
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
