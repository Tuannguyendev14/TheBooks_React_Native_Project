import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Book from '../../component/Book';
import {Navigation} from 'react-native-navigation';

export default class ShowAllBook extends Component {
  componentDidMount() {
    console.log(this.props.data);
  }

  backMainScreen = () => {
    Navigation.dismissAllModals();
  };

  render() {
    return (
      <View style={styles.container}>
        <Icon
          name="ios-arrow-dropleft"
          size={30}
          color="#5f5f5f"
          onPress={() => this.backMainScreen()}
        />
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.title1}>
          <FlatList
            style={styles.list}
            data={Object.keys(this.props.data)}
            renderItem={({item}) => (
              <Book
                //style={styles.book}
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
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 80,
  },
  title1: {
    //marginHorizontal: 15,
  },
  title: {
    color: '#262626',
    fontSize: 25.5,
    paddingTop: 10,
  },
});
