import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Book extends Component {
  render() {
    return (
      <View style={styles.showflast}>
        <TouchableOpacity>
          <Image
            source={{uri: this.props.image}}
            style={{
              width: 170,
              height: 200,
              backgroundColor: 'red',
              marginHorizontal: 2,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.name}>{this.props.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.author}>{this.props.author}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rate}>
          <Icon name="ios-star" size={11} color="#fc9619" />
          <Icon name="ios-star" size={11} color="#fc9619" />
          <Icon name="ios-star" size={11} color="#fc9619" />
          <Icon name="ios-star" size={11} color="#fc9619" />
          <Icon name="ios-star" size={11} color="#979797" />
          <Text style={styles.bookCount}>{this.props.count}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bookCount: {
    color: '#ababab',
    paddingLeft: 10,
  },
  topbar: {
    paddingLeft: 15,
    paddingTop: 20.5,
    fontSize: 10.5,
    flexDirection: 'row',
    //color: 'red',
    //flex: 1,
  },
  search: {
    marginLeft: 230,
  },
  list: {
    paddingTop: 5,
  },
  text: {
    fontSize: 25.5,
    paddingTop: 5,
  },
  main: {
    padding: 10,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showflast: {
    //padding: 10,
    marginRight: 15,
    // width: 190,
    marginHorizontal: 10,
  },
  name: {
    color: '#4a4a4a',
    fontSize: 18,
  },
  author: {
    color: '#ababab',
    fontSize: 16,
  },
});
export default Book;
