import React, {Component} from 'react';
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
  renderItem = ({item}) => {
    return (
      <>
        <Book
          image={offlineData.Data.NewBooks[item].Medias[0].ImageUrl}
          name={offlineData.Data.NewBooks[item].Shelf.Name}
          author={offlineData.Data.NewBooks[item].Authors[0].Name}
          count={offlineData.Data.NewBooks[item].Shelf.BookCount}
        />
      </>
    );
  };

  render() {
    return (
      <View>
        <View style={styles.topbar}>
          <Icon name="ios-options" size={30} color="#5f5f5f" />
          <Icon
            style={styles.search}
            name="ios-search"
            size={30}
            color="#5f5f5f"
          />
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.main}>
            <View style={styles.category}>
              <Text style={styles.text}>
                Đọc nhiều{'('} {offlineData.Data.NewBooks.length} {')'}
              </Text>
              <Text style={styles.showall}>Xem hết</Text>
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
                />
              )}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
            <View style={styles.category}>
              <Text style={styles.text}>
                Sách mới{'('} {offlineData.Data.NewBooks.length} {')'}
              </Text>
              <Text style={styles.showall}>Xem hết</Text>
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
              <Text style={styles.showall}>Xem hết</Text>
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
    flex: 3.5,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showflast: {
    paddingRight: 15,
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
