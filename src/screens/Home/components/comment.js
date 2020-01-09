import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import ImageProfile from '../../../../assets/images/Home/anh.jpg';
import Icon from 'react-native-vector-icons/Ionicons';

export default class comment extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.ViewControl}>
          <Image source={ImageProfile} style={styles.image} />
          <View style={styles.viewname}>
            <Text>Kim Dung</Text>
            <TouchableOpacity style={styles.star}>
              <Icon name="ios-star" size={18} color="#fc9619" />
              <Icon name="ios-star" size={18} color="#fc9619" />
              <Icon name="ios-star" size={18} color="#fc9619" />
              <Icon name="ios-star" size={18} color="#fc9619" />
              <Icon name="ios-star" size={18} color="#979797" />
            </TouchableOpacity>
          </View>
          <View style={styles.viewbutton}>
            <View>
              <TouchableWithoutFeedback>
                <Icon name="ios-create" size={30} color="" />
              </TouchableWithoutFeedback>
            </View>
            <View>
              <TouchableWithoutFeedback>
                <Icon name="ios-trash" size={30} color="" />
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        <View style={styles.viewcomment}>
          <Text style={styles.textcomment}>
            Sách hay, cần có thêm nhiều đầu sách như vậy hơn nửa để tuổi trẻ ít
            bị tẩy não. Sách rất rất chi là hay
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  ViewControl: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  viewname: {
    flex: 5,
    margin: 5,
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewbutton: {
    alignItems: 'flex-end',
    flex: 2,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  viewcomment: {
    marginVertical: 15,
  },
  textcomment: {
    fontSize: 15,
    color: 'gray',
  },
});
