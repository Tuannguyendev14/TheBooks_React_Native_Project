import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {offlineData} from '../../utils/offlineData';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Filter extends Component {
  renderItem = ({item}) => {
    return (
      <>
        <View style={styles.containerMain}>
          <TouchableOpacity style={styles.item}>
            <Image
              style={styles.imageThumbnail}
              source={{uri: item.Medias[0].ImageUrl}}
            />
          </TouchableOpacity>
          <View style={styles.containerBody}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => this.onPressItem(item)}>
              <Text style={styles.title}>{item.Title}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => this.onPressItem(item)}>
              <Text style={[styles.titleAuthor, styles.titleSize]}>
                {item.Authors[0].Name === null
                  ? 'No name'
                  : item.Authors[0].Name}
              </Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <Icon name="ios-star" size={30} color="#fc9619" />
              <Icon name="ios-star" size={30} color="#fc9619" />
              <Icon name="ios-star" size={30} color="#fc9619" />
              <Icon name="ios-star" size={30} color="#fc9619" />
              <Icon name="ios-star-outline" size={30} color="#fc9619" />
              <TouchableOpacity
                style={styles.item}
                onPress={() => this.onPressItem(item)}>
                <Text style={[styles.titleNumber, styles.titleSize]}>
                  {item.Shelf.BookCount}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerNumber}>
              <Icon name="ios-bookmarks" size={30} color="#fc9619" />
              <TouchableOpacity
                style={styles.item}
                onPress={() => this.onPressItem(item)}>
                <Text style={[styles.titleNumber, styles.titleSize]}>
                  {item.Quantity} quyển
                </Text>
              </TouchableOpacity>
              <Icon name="ios-pricetag" size={30} color="#fc9619" />
              <TouchableOpacity
                style={styles.item}
                onPress={() => this.onPressItem(item)}>
                <Text style={[styles.titleNumber, styles.titleSize]}>
                  {item.Price}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  render() {
    const i = 0;
    const DATA = offlineData.Data.NewBooks;
    // const result = DATA.map(person => ({
    //   renderItem(result),
    // }));
    // console.log(result);
    return (
      <>
        <View style={styles.header}>
          <View style={styles.back}>
            <TouchableOpacity style={styles.item}>
              <Icon name="ios-arrow-back" size={30} color="#5f5f5f" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.title}>Tháng tư và tuổi trẻ</Text>
          </View>
          <View style={styles.search}>
            <TouchableOpacity style={styles.item}>
              <Icon name="ios-search" size={30} color="#5f5f5f" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.header}>
          <View style={[styles.type, styles.sort]}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 2}}>
                <Text style={styles.styleText}>Thể loại</Text>
              </View>
              <View style={{marginTop: 8}}>
                <Icon name="ios-funnel" size={30} color="#5f5f5f" />
              </View>
            </View>
          </View>
          <View style={styles.sort}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 2}}>
                <Text style={styles.styleText}>Sắp xếp</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 8}}>
                <Icon name="ios-arrow-round-down" size={30} color="#5f5f5f" />
                <Icon name="ios-arrow-round-up" size={30} color="#5f5f5f" />
              </View>
            </View>
          </View>
          <View style={styles.choose}>
            <View style={{marginTop: 8}}>
              <Icon name="ios-list" size={30} color="#5f5f5f" />
            </View>
          </View>
        </View>
        <View style={[styles.container, styles.item]}>
          <FlatList
            // data={DATA.map(item => Object.assign({key: item.Id}, item))}
            data={DATA}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
            // onEndThread => load data
            // onRefresh
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  type: {
    marginLeft: -16,
  },
  sort: {
    flex: 3,
    borderWidth: 1.5,
    borderColor: '#d6d7da',
  },
  choose: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#d6d7da',
    marginRight: -16,
    alignItems: 'center',
  },
  header: {
    borderColor: 'red',
    height: 50,
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  container: {
    marginHorizontal: 16,
  },
  containerMain: {
    flexDirection: 'row',
    flex: 2,
  },
  containerBody: {
    flex: 2,
    marginHorizontal: 16,
  },
  containerNumber: {
    flexDirection: 'row',
    flex: 2,
  },
  item: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    marginTop: 4,
    color: '#4a4a4a',
  },
  titleSize: {
    fontSize: 25,
  },
  titleNumber: {
    opacity: 0.3,
  },
  titleAuthor: {
    opacity: 0.3,
  },
  imageThumbnail: {
    flex: 1,
    height: 200,
    borderRadius: 15,
  },
  search: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 8,
  },
  back: {
    flex: 1,
    marginTop: 8,
  },
  styleText: {
    textAlign: 'center',
    marginTop: 15,
  },
});
