import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Icon1 from 'react-native-vector-icons/thebook-appicon';

import {Navigation} from 'react-native-navigation';

class Book extends Component {
  onPress = (image, name, title, author, count, id) => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'Detail',
              passProps: {
                data: image,
                name: name,
                namebook: title,
                authorName: author,
                rank: count,
                id: id,
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
    //const {image, name, author, count, title} = this.props;

    return (
      <View style={styles.showflast}>
        <TouchableOpacity
          style={styles.image}
          onPress={() =>
            this.onPress(
              this.props.image,
              this.props.name,
              this.props.title,
              this.props.author,
              this.props.count,
              this.props.id,
            )
          }>
          <Image
            source={{uri: this.props.image}}
            style={{
              width: 150,
              height: 200,
              backgroundColor: 'red',
              marginHorizontal: 2,
            }}
          />
        </TouchableOpacity>
        <View style={styles.right}>
          <TouchableOpacity>
            <Text style={styles.name}>{this.props.name}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.author}>{this.props.author}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rate}>
            <Icon1 name="star" size={11} color="#fc9619" />
            <Icon1 name="star" size={11} color="#fc9619" />
            <Icon1 name="star" size={11} color="#fc9619" />
            <Icon1 name="star" size={11} color="#fc9619" />
            <Icon1 name="star" size={11} color="#979797" />
            <Text style={styles.bookCount}>{this.props.count}</Text>
          </TouchableOpacity>
        </View>
        <Icon1
          style={styles.delete_Card}
          name="ic-delete"
          size={15}
          color="#5f5f5f"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  delete_Card: {
    alignItems: 'flex-end',
  },
  right: {
    flexDirection: 'column',
    flex: 1,
    paddingLeft: 5,
  },
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
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    flex: 0.5,
  },
  name: {
    color: '#4a4a4a',
    fontSize: 18,
  },
  author: {
    color: '#ababab',
    fontSize: 16,
  },
  image: {
    flex: 1,
  },
});
export default Book;
