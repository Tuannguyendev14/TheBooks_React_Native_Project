import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { getBook } from '../../redux/bookRedux/actions';
import Icon1 from 'react-native-vector-icons/thebook-appicon';
import Book from '../ShoppingCard/components/bookOrder';
import { Navigation } from 'react-native-navigation';
import { List } from 'react-native-paper';
class ShoppingCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Icon1 style={styles.back} name="ic-back" size={25} color="#5f5f5f" />
          <Text style={styles.text}>Giỏ hàng</Text>
          <Icon1
            style={styles.trash}
            name="ic-trash"
            size={25}
            color="#5f5f5f"
          />
        </View>
        <View style={styles.center}>
          <FlatList
            style={styles.list}
            data={Object.keys(this.props.book.data.Data.NewBooks)}
            renderItem={({ item }) => (
              <Book
                image={
                  this.props.book.data.Data.NewBooks[item].Medias[0].ImageUrl
                }
                name={this.props.book.data.Data.NewBooks[item].Shelf.Name}
                author={
                  this.props.book.data.Data.NewBooks[item].Authors[0].Name
                }
                count={this.props.book.data.Data.NewBooks[item].Shelf.BookCount}
                title={this.props.book.data.Data.NewBooks[item].Title}
                id={this.props.book.data.Data.NewBooks[item].Medias[0].Id}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  center: {
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
    borderRadius: 5,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
    borderRadius: 5,
    paddingBottom: 10,
  },
  container: {
    padding: 10,
    paddingTop: 30,
  },
  trash: {
    alignItems: 'flex-end',
    flex: 0.5,
  },
  back: {
    flex: 1,
  },
  text: {
    alignItems: 'center',
    textAlign: 'center',
    flex: 5,
    fontSize: 20,
    color: '#4a4a4a',
  },
  list: {
    paddingTop: 10,
  },
});
const mapStateToProps = state => {
  console.log('render:', state.bookReducer);
  return { book: state.bookReducer };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetBooks: () => dispatch(getBook()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCard);
