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

export default class Filter2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      check: false,
    };
  }

  renderItem = ({item}) => {
    let star = [];
    let starOutline = [];
    for (let i = 0; i < item.OverallStarRating; i++) {
      star.push(<Icon name="ios-star" size={20} color="#fc9619" />);
    }
    for (let i = 0; i < 5 - item.OverallStarRating; i++) {
      starOutline.push(
        <Icon name="ios-star-outline" size={20} color="#fc9619" />,
      );
    }
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
              {star}
              {starOutline}
              <TouchableOpacity
                style={styles.item}
                onPress={() => this.onPressItem(item)}>
                <Text style={[styles.titleNumber, styles.titleSize]}>
                  {item.Shelf.BookCount}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  demo() {
    return (
      <View>
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
              <TouchableOpacity
                onPress={() => {
                  this.setState({check: !this.state.check});
                  // onChangeScreenFilter();
                }}>
                <Text>
                  <Icon name="ios-list" size={30} color="#5f5f5f" />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* <View style={[styles.container, styles.item, {backgroundColor: 'red'}]}> */}
        {this.state.check === false
          ? this.displayScreenHorizontal()
          : this.displayScreenVertical()}
        {/* </View> */}
      </View>
    );
  }

  displayScreenHorizontal() {
    const DATA = offlineData.Data.NewBooks;
    return (
      <View>
        <FlatList
          // data={DATA.map(item => Object.assign({key: item.Id}, item))}
          data={DATA}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
          key={2}
          numColumns={2}
          // onEndThread => load data
          // onRefresh
        />
      </View>
    );
  }

  displayScreenVertical() {
    const DATA = offlineData.Data.NewBooks;
    return (
      <View>
        <FlatList
          // data={DATA.map(item => Object.assign({key: item.Id}, item))}
          data={DATA}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
          // onEndThread => load data
          // onRefresh
        />
      </View>
    );
  }

  render() {
    return <View>{this.demo()}</View>;
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
    flex: 2,
    marginVertical: 16,
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
    fontSize: 20,
    marginTop: 4,
    color: '#4a4a4a',
  },
  titleSize: {
    fontSize: 15,
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
    marginHorizontal: 16,
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
