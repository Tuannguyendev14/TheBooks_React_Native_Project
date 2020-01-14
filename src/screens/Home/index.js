import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import {getBook} from '../../redux/bookRedux/actions';
import {Text, View, StyleSheet, FlatList, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import Book from '../../component/Book';
import {get} from 'lodash';

class index extends Component {
  constructor(props) {
    super(props);
  }

  changScreenShowAll = (data, title) => {
    Navigation.showModal({
      component: {
        name: 'ShowAllBook',
        passProps: {
          data: data,
          title: title,
        },
      },
    });
  };

  changScreenSearch = () => {
    Navigation.showModal({
      component: {
        name: 'Search',
      },
    });
  };

  changScreenFilter = () => {
    Navigation.showModal({
      component: {
        name: 'Filter',
      },
    });
  };

  componentDidMount() {
    this.props.onGetBooks();
  }

  render() {
    const newBooks = this.props.book.data.NewBooks;
    const mostBorrowBooks = this.props.book.data.MostBorrowBooks;

    return (
      <View>
        <View style={styles.topbar}>
          <View style={{flex: 1}}>
            <Icon
              name="ic-menu"
              size={30}
              color="#5f5f5f"
              onPress={() => this.changScreenFilter()}
            />
          </View>
          <View style={styles.search}>
            <Icon
              name="ic-search"
              size={30}
              color="#5f5f5f"
              onPress={() => this.changScreenSearch()}
            />
          </View>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.main}>
            <View style={styles.category}>
              <Text style={styles.text}>
                Sách mới ({get(newBooks, 'length')})
              </Text>
              <Text
                style={styles.showall}
                onPress={() => this.changScreenShowAll(newBooks, 'Sách mới')}>
                Xem hết
              </Text>
            </View>
            <FlatList
              style={styles.list}
              data={newBooks}
              renderItem={({item}) => (
                <Book
                  image={item.Medias[0].ImageUrl}
                  name={item.Shelf.Name}
                  author={item.Authors[0].Name}
                  count={item.Shelf.BookCount}
                  title={item.Title}
                  OverallStarRating={item.OverallStarRating}
                  idBook={item.Id}
                />
              )}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
            <View style={styles.category}>
              <Text style={styles.text}>
                Sách mượn nhiều ({get(mostBorrowBooks, 'length')})
              </Text>

              <Text
                style={styles.showall}
                onPress={() =>
                  this.changScreenShowAll(mostBorrowBooks, 'Sách mượn nhiều')
                }>
                Xem hết
              </Text>
            </View>
            <FlatList
              style={styles.list}
              data={mostBorrowBooks}
              renderItem={({item}) => (
                <Book
                  image={item.Medias[0].ImageUrl}
                  name={item.Shelf.Name}
                  author={item.Authors[0].Name}
                  count={item.Shelf.BookCount}
                  OverallStarRating={item.OverallStarRating}
                  title={item.Title}
                  idBook={item.Id}
                />
              )}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  showall: {
    alignItems: 'flex-end',
    color: '#1d9dd8',
    flex: 1,
    fontSize: 15,
  },
  category: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  scroll: {
    padding: 10,
    marginBottom: 65,
    paddingBottom: 100,
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
    marginHorizontal: 10,
  },
  search: {
    alignItems: 'flex-end',
  },
  list: {
    paddingTop: 5,
  },
  text: {
    fontSize: 22,
    paddingTop: 5,
    flex: 3.5,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#4a4a4a',
    fontSize: 18,
  },
  author: {
    color: '#ababab',
    fontSize: 16,
    width: 150,
  },
});
const mapStateToProps = state => {
  return {book: state.bookReducer};
};

const mapDispatchToProps = dispatch => {
  return {
    onGetBooks: () => dispatch(getBook()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(index);
