import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Book from '../../component/Book';
export default class ShowAllBook extends Component {
  componentDidMount() {
    console.log(this.props.data);
  }
  render() {
    return (
      <View style={styles.container}>
        <Icon name="ios-arrow-dropleft" size={30} color="#5f5f5f" />
        <Text style={styles.title}>{this.props.title}</Text>
        <FlatList
          style={styles.list}
          data={Object.keys(this.props.data)}
          renderItem={({item}) => (
            <Book
              style={styles.book}
              image={this.props.data[item].Medias[0].ImageUrl}
              name={this.props.data[item].Shelf.Name}
              author={this.props.data[item].Authors[0].Name}
              count={this.props.data[item].Shelf.BookCount}
            />
          )}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 80,
  },
  title: {
    color: '#262626',
    fontSize: 25.5,
    paddingTop: 10,
  },
  book: {
    padding: 5,
    flex: 0.5,
    marginLeft: 5,
  },
  // list: {
  //   alignItems: ''
  // },
});
