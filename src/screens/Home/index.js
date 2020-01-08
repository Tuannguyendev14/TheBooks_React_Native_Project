import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import {getBook} from '../../redux/bookRedux/actions';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/thebook-appicon';
import {offlineData} from '../../utils/offlineData';
import Book from '../../component/Book';
//const data = this.props.user.data.Data;
class index extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //this.props.onGetBooks();
    console.log('full data: ', this.props.book.data.Data);
  }
  renderItem = ({item}) => {
    return (
      <>
        <Book
          image={this.props.book.data.Data.NewBooks[item].Medias[0].ImageUrl}
          name={this.props.book.data.Data.NewBooks[item].Shelf.Name}
          author={this.props.book.data.Data.NewBooks[item].Authors[0].Name}
          count={this.props.book.data.Data.NewBooks[item].Shelf.BookCount}
        />
      </>
    );
  };

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

  render() {
    return (
      <View>
        <View style={styles.topbar}>
          <View style={{flex: 1}}>
            <Icon1 name="ic-menu" size={30} color="#5f5f5f" />
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
