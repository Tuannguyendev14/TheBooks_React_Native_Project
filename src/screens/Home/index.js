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
import Icon1 from 'react-native-vector-icons/thebook-appicon';
import {offlineData} from '../../utils/offlineData';
import Book from '../../component/Book';
import {onSignIn} from '../../navigation';
//const data = this.props.user.data.Data;
class index extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //this.props.onGetBooks();
    console.log('full data: ', this.props.book.data.Data);
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
        //this.onPress(parsed.Data.Id, parsed.Token.access_token, idbasket);
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

  render() {
    const {Data} = offlineData.Data.NewBooks;
    return (
      <View>
        <View style={styles.topbar}>
          <View style={{flex: 1}}>
            <Icon1
              name="ic-menu"
              size={30}
              color="#5f5f5f"
              onPress={() => this.changScreenFilter()}
            />
          </View>
          <View style={styles.search}>
            <Icon1
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
                Sách mới{'('} {this.props.book.data.Data.NewBooks.length} {')'}
              </Text>
              <Text
                style={styles.showall}
                onPress={() =>
                  this.changScreenShowAll(
                    this.props.book.data.Data.NewBooks,
                    'Sách mới',
                  )
                }>
                Xem hết
              </Text>
            </View>
            <FlatList
              style={styles.list}
              data={Object.keys(this.props.book.data.Data.NewBooks)}
              renderItem={({item}) => (
                <Book
                  image={
                    this.props.book.data.Data.NewBooks[item].Medias[0].ImageUrl
                  }
                  name={this.props.book.data.Data.NewBooks[item].Shelf.Name}
                  author={
                    this.props.book.data.Data.NewBooks[item].Authors[0].Name
                  }
                  count={
                    this.props.book.data.Data.NewBooks[item].Shelf.BookCount
                  }
                  title={this.props.book.data.Data.NewBooks[item].Title}
                  OverallStarRating={
                    this.props.book.data.Data.NewBooks[item].OverallStarRating
                  }
                  Price={this.props.book.data.Data.NewBooks[item].Price}
                  idBook={this.props.book.data.Data.NewBooks[item].Id}
                />
              )}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
            <View style={styles.category}>
              <Text style={styles.text}>
                Sách mượn nhiều{'('}{' '}
                {this.props.book.data.Data.MostBorrowBooks.length} {')'}
              </Text>
              <Text
                style={styles.showall}
                onPress={() =>
                  this.changScreenShowAll(
                    this.props.book.data.Data.MostBorrowBooks,
                    'Sách mượn nhiều',
                  )
                }>
                Xem hết
              </Text>
            </View>
            <FlatList
              style={styles.list}
              data={Object.keys(this.props.book.data.Data.MostBorrowBooks)}
              renderItem={({item}) => (
                <Book
                  image={
                    this.props.book.data.Data.MostBorrowBooks[item].Medias[0]
                      .ImageUrl
                  }
                  name={
                    this.props.book.data.Data.MostBorrowBooks[item].Shelf.Name
                  }
                  author={
                    this.props.book.data.Data.MostBorrowBooks[item].Authors[0]
                      .Name
                  }
                  count={
                    this.props.book.data.Data.MostBorrowBooks[item].Shelf
                      .BookCount
                  }
                  OverallStarRating={
                    this.props.book.data.Data.NewBooks[item].OverallStarRating
                  }
                  title={this.props.book.data.Data.MostBorrowBooks[item].Title}
                  idBook={this.props.book.data.Data.MostBorrowBooks[item].Id}
                />
              )}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Icon1
            name="ic-cart"
            size={60}
            color="red"
            onPress={() => this.onCheck()}
          />
        </View>

        {/* <Image
          source={{
            uri:
              'https://images.all-free-download.com/images/graphiclarge/shopping_cart_icon_vector_red_background_280670.jpg',
          }}
          style={styles.footer}
        /> */}
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
    //paddingLeft: 80,
    color: '#1d9dd8',
    flex: 1,
    marginBottom: 10,
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
    //color: 'red',
    //flex: 1,
    marginHorizontal: 10,
  },
  search: {
    // marginLeft: 230,

    alignItems: 'flex-end',
  },
  list: {
    paddingTop: 5,
  },
  text: {
    fontSize: 25.5,
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
    //maxWidth: 150,
    width: 150,
  },
});
const mapStateToProps = state => {
  console.log('render:', state.bookReducer);
  return {book: state.bookReducer};
};

const mapDispatchToProps = dispatch => {
  return {
    onGetBooks: () => dispatch(getBook()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
