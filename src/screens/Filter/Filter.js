import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import {offlineData} from '../../utils/offlineData';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/thebook-appicon';

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      check: false,
    };
  }

  backMainScreen = () => {
    Navigation.dismissModal(this.props.componentId);
  };

  countStar = item => {
    let star = [];
    let starOutline = [];
    for (let i = 0; i < item.OverallStarRating; i++) {
      star.push(<Icon name="star" size={20} color="#fc9619" />);
    }
    for (let i = 0; i < 5 - item.OverallStarRating; i++) {
      star.push(<Icon name="ic-star-pre" size={20} color="#fc9619" />);
    }
    return star;
  };

  changScreenCategories = () => {
    Navigation.showModal({
      component: {
        name: 'Categories',
      },
    });
  };

  changScreenSort = () => {
    Navigation.showModal({
      component: {
        name: 'Sort',
        passProps: {
          data: data,
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

  displayScreenHorizontal() {
    const DATA = offlineData.Data.MostBorrowBooks;
    return (
      <View>
        <FlatList
          data={DATA}
          renderItem={this.renderItemHorizontal}
          keyExtractor={(item, index) => index}
          key={2}
          numColumns={2}
        />
      </View>
    );
  }

  displayScreenVertical() {
    const DATA = offlineData.Data.MostBorrowBooks;
    return (
      <View>
        <FlatList
          data={DATA}
          renderItem={this.renderItemVertical}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }

  renderItemHorizontal = ({item}) => {
    return item.Categories.map(listItem => (
      <View>
        {this.props.name === listItem.Name ? (
          <View>
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
                  <Text style={styles.title}>{item.Shelf.Name}</Text>
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
                  {this.countStar(item)}
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
          </View>
        ) : null}
      </View>
    ));
  };

  renderItemVertical = ({item}) => {
    return item.Categories.map(listItem => (
      <View>
        {this.props.name === listItem.Name ? (
          <View>
            <View style={styles.containerMain1}>
              <TouchableOpacity style={styles.item}>
                <Image
                  style={styles.imageThumbnail1}
                  source={{uri: item.Medias[0].ImageUrl}}
                />
              </TouchableOpacity>

              <View style={styles.containerBody}>
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => this.onPressItem(item)}>
                  <Text style={[styles.title, styles.title1]}>
                    {item.Title}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => this.onPressItem(item)}>
                  <Text style={[styles.titleAuthor, styles.titleSize1]}>
                    {item.Authors[0].Name === null
                      ? 'No name'
                      : item.Authors[0].Name}
                  </Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                  {this.countStar(item)}
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => this.onPressItem(item)}>
                    <Text style={[styles.titleNumber, styles.titleSize1]}>
                      {item.Shelf.BookCount}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.containerNumber1}>
                  <Icon name="ic-book-1" size={20} color="#fc9619" />
                  <TouchableOpacity style={styles.item}>
                    <Text style={[styles.titleNumber, styles.titleSize1]}>
                      {item.Quantity} quyển
                    </Text>
                  </TouchableOpacity>
                  <Icon name="ic-price" size={18} color="#fc9619" />
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => this.onPressItem(item)}>
                    <Text style={[styles.titleNumber, styles.titleSize1]}>
                      {item.Price}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ) : null}
      </View>
    ));
  };

  main() {
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.back}>
            <TouchableOpacity style={styles.item}>
              <Icon
                name="ic-back"
                size={30}
                color="#5f5f5f"
                onPress={() => this.backMainScreen()}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.title}>{this.props.name}</Text>
          </View>
          <View style={styles.search}>
            <TouchableOpacity style={styles.item}>
              <Icon
                name="ic-search"
                size={30}
                color="#5f5f5f"
                onPress={() => this.changScreenSearch()}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.header}>
          <View style={[styles.type, styles.sort]}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 2}}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.changScreenCategories()}>
                  <Text style={styles.styleText}>{this.props.name}</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 8}}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.changScreenCategories()}>
                  <Icon name="filter" size={30} color="#5f5f5f" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.sort}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 2}}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.changScreenSort()}>
                  <Text style={styles.styleText}>Sắp xếp</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row', marginTop: 8}}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.changScreenSort()}>
                  <Icon name="select" size={30} color="#5f5f5f" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.choose}>
            <View style={{marginTop: 8}}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({check: !this.state.check});
                }}>
                <Text>
                  {this.state.check === false ? (
                    <Icon name="ic-filter-change-2" size={30} color="#5f5f5f" />
                  ) : (
                    <Icon name="ic-filter-change" size={30} color="#5f5f5f" />
                  )}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {this.state.check === false
          ? this.displayScreenHorizontal()
          : this.displayScreenVertical()}
      </View>
    );
  }

  render() {
    return <View>{this.main()}</View>;
  }
}

const styles = StyleSheet.create({
  type: {
    marginLeft: -16,
    borderColor: '#d6d7da',
  },
  sort: {
    flex: 3,
    borderWidth: 1.5,
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderTopColor: '#d6d7da',
    borderBottomColor: '#d6d7da',
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
  containerMain: {
    flex: 2,
  },
  containerBody: {
    flex: 2,
    marginHorizontal: 16,
  },
  containerNumber: {
    // flexDirection: 'row',
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
    width: 190,
    height: 230,
    marginHorizontal: 10,
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

  containerMain1: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 35,
    marginTop: -7,
    flex: 1,
  },
  containerNumber1: {
    flexDirection: 'row',
    flex: 2,
  },
  title1: {
    fontSize: 25,
  },
  titleSize1: {
    fontSize: 20,
  },
  imageThumbnail1: {
    flex: 1,
    height: 200,
    borderRadius: 15,
  },
});
