import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon1 from 'react-native-vector-icons/thebook-appicon';
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
    const {
      image,
      name,
      author,
      count,
      title,
      idBook,
      OverallStarRating,
    } = this.props;

    let star = [];
    let starOutline = [];
    for (let i = 0; i < OverallStarRating; i++) {
      star.push(<Icon1 name="star" size={15} color="#fc9619" />);
    }
    for (let i = 0; i < 5 - OverallStarRating; i++) {
      starOutline.push(<Icon1 name="star" size={15} color="#c3c1c1" />);
    }

    const showAuthor =
      author === null ? (
        <Text style={styles.author} numberOfLines={1}>
          Chưa xác định
        </Text>
      ) : (
        <Text style={styles.author} numberOfLines={1}>
          {author}
        </Text>
      );
    return (
      <View style={styles.showflast}>
        <TouchableOpacity onPress={() => this.onPress(idBook)}>
          <Image source={{uri: image}} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.name} numberOfLines={1}>
            {title}
          </Text>
        </TouchableOpacity>

        <View>{showAuthor}</View>
        <TouchableOpacity style={styles.rate}>
          {star}
          {starOutline}
          <Text style={styles.bookCount}>{count}</Text>
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
    width: 170,
    marginVertical: 20,
    marginLeft: 10,
    height: 280,
  },
  name: {
    color: '#4a4a4a',
    fontSize: 18,
    marginTop: 10,
  },
  author: {
    color: '#ababab',
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 200,
    backgroundColor: 'red',
    marginHorizontal: 2,
  },
});
export default Book;
