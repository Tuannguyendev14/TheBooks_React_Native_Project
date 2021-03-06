import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import iconProfile from '../../../../assets/images/profile-icon.png';

import {Navigation} from 'react-native-navigation';

class Book extends Component {
  onPress = idBook => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'Detail',
              passProps: {
                IdBook: idBook,
              },
              options: {
                topBar: {
                  title: {
                    text: '',
                    alignment: 'center',
                  },
                  visible: false,
                },
              },
            },
          },
        ],
      },
    });
  };

  render() {
    const {image, name, booksCount, extraInfor} = this.props;

    const showImage =
      image === '' ? (
        <Image source={iconProfile} style={styles.image} />
      ) : (
        <Image source={{uri: image}} style={styles.image} />
      );

    return (
      <View style={styles.showflast}>
        {showImage}
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.infor}>
          {booksCount} {extraInfor}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  showflast: {
    width: 160,
    marginVertical: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: '#4a4a4a',
    fontSize: 18,
  },
  infor: {
    color: '#ababab',
    fontSize: 16,
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 150,
  },
});
export default Book;
