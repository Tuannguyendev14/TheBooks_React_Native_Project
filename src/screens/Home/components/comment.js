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
import Icon from 'react-native-vector-icons/thebook-appicon';

export default class comment extends Component {
  render() {
    let star = [];
    let starOutline = [];
    for (let i = 0; i < this.props.star; i++) {
      star.push(<Icon name="star" size={20} color="#fc9619" />);
    }
    for (let i = 0; i < 5 - this.props.star; i++) {
      starOutline.push(<Icon name="ic-star-pre" size={20} color="#fc9619" />);
    }

    return (
      <View style={styles.container}>
        <View style={styles.ViewControl}>
          <Image source={{uri: this.props.userImage}} style={styles.image} />
          <View style={styles.viewname}>
            <Text>{this.props.name}</Text>
            <TouchableOpacity style={styles.star}>
              {star}
              {starOutline}
            </TouchableOpacity>
          </View>
          <View style={styles.viewbutton}>
            <View>
              <TouchableWithoutFeedback>
                <Icon name="ic-edit-comment" size={25} color="" />
              </TouchableWithoutFeedback>
            </View>
            <View>
              <TouchableWithoutFeedback>
                <Icon name="ic-trash" size={25} color="" />
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        <View style={styles.viewcomment}>
          <Text style={styles.textcomment} numberOfLines={2}>
            {this.props.comment}
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
