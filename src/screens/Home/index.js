import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import {getBook} from '../../redux/bookRedux/actions';
import {
  Text,
  View,
  Image,
  StyleSheet,
  AsyncStorage,
  FlatList,
  ScrollView,
} from 'react-native';
import {onSignIn} from '../../navigation';
import {getBestUsers} from '../../redux/userRedux/actions';
import {getOutstandingReviews} from '../../redux/commentRedux/actions';
import Icon from 'react-native-vector-icons/thebook-appicon';
import Book from '../../component/Book';
import UserReview from './components/userReview';
import {get, filter} from 'lodash';

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

  onCheck = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let idbasket = await AsyncStorage.getItem('idbasket');
      let parsed = JSON.parse(user);
      console.log('parsed:', parsed);
      if (parsed === null) {
        onSignIn();
      } else {
        this.changShopping(idbasket, parsed.Token.access_token);
      }
    } catch (error) {
      alert(error);
    }
  };

  changShopping = (idbasket, token) => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'ShoppingCard',
              passProps: {
                token: token,
                idbasket: idbasket,
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
    this.props.onGetBestUsersData();
    this.props.onGetOutstandingData();
  }

  render() {
    const newBooks = this.props.book.data.NewBooks;
    const mostBorrowBooks = this.props.book.data.MostBorrowBooks;
    const bestUsers = this.props.bestUsers;
    const oustandingReviews = this.props.oustandingReviews;

    const listNewBooksActive = filter(
      newBooks,
      item => item.IsDeleted === false,
    );

    const listMostBorrowBooksActive = filter(
      mostBorrowBooks,
      item => item.IsDeleted === false,
    );

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
                Sách mới ({get(listNewBooksActive, 'length')})
              </Text>
              <Text
                style={styles.showall}
                onPress={() =>
                  this.changScreenShowAll(listNewBooksActive, 'Sách mới')
                }>
                Xem hết
              </Text>
            </View>
            <FlatList
              style={styles.list}
              data={listNewBooksActive}
              renderItem={({item}) => (
                <Book
                  image={get(item, 'Medias.0.ImageUrl')}
                  author={get(item, 'Authors.0.Name')}
                  count={get(item, 'Shelf.BookCount')}
                  OverallStarRating={get(item, 'OverallStarRating')}
                  title={get(item, 'Title')}
                  idBook={get(item, 'Id')}
                />
              )}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
            <View style={styles.category}>
              <Text style={styles.text}>
                Sách mượn nhiều ({get(listMostBorrowBooksActive, 'length')})
              </Text>

              <Text
                style={styles.showall}
                onPress={() =>
                  this.changScreenShowAll(
                    listMostBorrowBooksActive,
                    'Sách mượn nhiều',
                  )
                }>
                Xem hết
              </Text>
            </View>
            <FlatList
              style={styles.list}
              data={listMostBorrowBooksActive}
              renderItem={({item}) => (
                <Book
                  image={get(item, 'Medias.0.ImageUrl')}
                  name={get(item, 'Shelf.Name')}
                  author={get(item, 'Authors.0.Name')}
                  count={get(item, 'Shelf.BookCount')}
                  OverallStarRating={get(item, 'OverallStarRating')}
                  title={get(item, 'Title')}
                  idBook={get(item, 'Id')}
                />
              )}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />

            <View style={styles.category}>
              <Text style={styles.text}>Top 10 bạn đọc mượn sách</Text>
            </View>
            <FlatList
              style={styles.list}
              data={bestUsers}
              renderItem={({item}) => (
                <UserReview
                  image={item.ImageUrl}
                  name={item.Name}
                  booksCount={item.BooksCount}
                  extraInfor={'lượt mượn'}
                />
              )}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />

            <View style={styles.category}>
              <Text style={styles.text}>Top 5 người nhận xét nổi bật</Text>
            </View>
            <FlatList
              style={styles.list}
              data={oustandingReviews}
              renderItem={({item}) => (
                <UserReview image={item.UrlImageUser} name={item.UserName} />
              )}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Icon
            name="ic-cart"
            size={60}
            color="red"
            onPress={() => this.onCheck()}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 65,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'red',
    right: 20,
    overflow: 'hidden',
  },
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
  return {
    book: state.bookReducer,
    bestUsers: state.user.bestUsers,
    oustandingReviews: state.comment.ounstandingReviews,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetBooks: () => dispatch(getBook()),
    onGetBestUsersData: () => dispatch(getBestUsers()),
    onGetOutstandingData: () => dispatch(getOutstandingReviews()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(index);
