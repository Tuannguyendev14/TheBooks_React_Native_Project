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
import Filter from './Filter';
import {Dropdown} from 'react-native-material-dropdown';

Navigation.registerComponent('Filter', () => Filter);

export const onChangeScreenFilter = () => {
  Navigation.push(this.props.componentId, {
    component: {
      name: 'Filter',
      options: {
        topBar: {
          visible: false,
        },
      },
    },
  });
};

export default class Categories extends Component {
  renderItem = item => {
    console.log('item: ', item);
    return (
      <View>
        <View style={styles.containerMain1}>
          <View style={styles.containerBody1}>
            <TouchableOpacity
              style={styles.item1}
              onPress={() => this.onPressItem(item)}>
              <Dropdown
                label={item.Name}
                // data={item.SubCategories.map(cate => ({
                //     this.renderItem1(cate.ParentCategory.Name)
                // }));}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  renderItem1 = item => {
    console.log('item: ', item);
    return (
      <View>
        <View style={styles.containerMain1}>
          <View style={styles.containerBody1}>
            <TouchableOpacity
              style={styles.item1}
              onPress={() => this.onPressItem(item)}>
              <Text style={styles.title1}>{item.Name}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const i = 0;
    // const DATA = offlineData.Data.References.Categories[0].SubCategories;
    const DATA = offlineData.Data.References.Categories;
    console.log('data', DATA);

    // const result = DATA.map(person => ({
    //   renderItem(result),
    // }));
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.back}>
            <TouchableOpacity style={styles.item}>
              <Icon name="ios-close" size={40} color="#5f5f5f" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.title}>Thể loại</Text>
          </View>
          <View style={styles.search}>
            <TouchableOpacity style={styles.item}>
              <Icon name="ios-refresh" size={30} color="#5f5f5f" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.container, styles.item]}>
          <FlatList
            // data={DATA.map(item => Object.assign({key: item.Id}, item))}
            data={DATA}
            renderItem={({item}) => this.renderItem(item)}
            keyExtractor={(item, index) => index}
            // onEndThread => load data
            // onRefresh
          />
        </View>
      </View>
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
  containerMain1: {
    flexDirection: 'row',
    marginVertical: 10,
    flex: 2,
  },
  containerBody1: {
    flex: 2,
    marginHorizontal: 16,
  },
  item1: {
    flex: 1,
  },
  title1: {
    fontSize: 30,
    marginTop: 4,
    color: '#4a4a4a',
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
});
