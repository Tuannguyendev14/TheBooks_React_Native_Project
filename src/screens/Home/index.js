import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {offlineData} from '../../utils/offlineData';
import Book from '../../component/Book';
export default class index extends Component {
  componentDidMount() {
    var dd = offlineData.Data.CommonSearch;
    //console.log(dd[2].Medias[0].ImageUrl);
    console.log(dd);
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

  render() {
    const {Data} = offlineData.Data.NewBooks;
    return (
      <View>
        <View style={styles.topbar}>
          <View style={{flex: 1}}>
            <Icon name="ios-options" size={30} color="#5f5f5f" />
          </View>
          <View style={styles.search}>
            <Icon
              name="ios-search"
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
                Đọc nhiều{'('} {offlineData.Data.NewBooks.length} {')'}
              </Text>
              <Text
                style={styles.showall}
                onPress={() =>
                  this.changScreenShowAll(
                    offlineData.Data.NewBooks,
                    'Đọc nhiều',
                  )
                }>
                Xem hết
              </Text>
            </View>

            <FlatList
              style={styles.list}
              data={Object.keys(offlineData.Data.NewBooks)}
              renderItem={({item}) => {
                return (
                  <Book
                    image={offlineData.Data.NewBooks[item].Medias[0].ImageUrl}
                    name={offlineData.Data.NewBooks[item].Shelf.Name}
                    author={offlineData.Data.NewBooks[item].Authors[0].Name}
                    count={offlineData.Data.NewBooks[item].Shelf.BookCount}
                    title={offlineData.Data.NewBooks[item].Title}
                  />
                );
              }}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
            <View style={styles.category}>
              <Text style={styles.text}>
                Sách mới{'('} {offlineData.Data.NewBooks.length} {')'}
              </Text>
              <Text
                style={styles.showall}
                onPress={() =>
                  this.changScreenShowAll(offlineData.Data.NewBooks, 'Sách mới')
                }>
                Xem hết
              </Text>
            </View>
            <FlatList
              style={styles.list}
              data={Object.keys(offlineData.Data.NewBooks)}
              renderItem={({item}) => (
                <Book
                  image={offlineData.Data.NewBooks[item].Medias[0].ImageUrl}
                  name={offlineData.Data.NewBooks[item].Shelf.Name}
                  author={offlineData.Data.NewBooks[item].Authors[0].Name}
                  count={offlineData.Data.NewBooks[item].Shelf.BookCount}
                  title={offlineData.Data.NewBooks[item].Title}
                />
              )}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
            <View style={styles.category}>
              <Text style={styles.text}>
                Sách mượn nhiều{'('} {offlineData.Data.MostBorrowBooks.length}{' '}
                {')'}
              </Text>
              <Text
                style={styles.showall}
                onPress={() =>
                  this.changScreenShowAll(
                    offlineData.Data.MostBorrowBooks,
                    'Sách mượn nhiều',
                  )
                }>
                Xem hết
              </Text>
            </View>
            <FlatList
              style={styles.list}
              data={Object.keys(offlineData.Data.MostBorrowBooks)}
              renderItem={({item}) => (
                <Book
                  image={
                    offlineData.Data.MostBorrowBooks[item].Medias[0].ImageUrl
                  }
                  name={offlineData.Data.MostBorrowBooks[item].Shelf.Name}
                  author={
                    offlineData.Data.MostBorrowBooks[item].Authors[0].Name
                  }
                  count={offlineData.Data.MostBorrowBooks[item].Shelf.BookCount}
                  title={offlineData.Data.MostBorrowBooks[item].Title}
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
  },
  category: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  scroll: {
    padding: 10,
    marginBottom: 90,
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
