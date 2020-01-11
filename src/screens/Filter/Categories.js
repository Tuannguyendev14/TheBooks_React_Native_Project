import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  BackHandler,
  Picker,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {offlineData} from '../../utils/offlineData';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/thebook-appicon';
import {List} from 'react-native-paper';

export default class Categories extends Component {
  constructor(props) {
    super(props);
  }

  renderItem = DATA => {
    return DATA.map(item => (
      <View>
        <List.Accordion title={item.Name}>
          {item.SubCategories.map(listItem => (
            <List.Item style={{marginHorizontal: 10}} title={listItem.Name} />
          ))}
        </List.Accordion>
      </View>
    ));
  };

  backMainScreen = () => {
    Navigation.dismissModal(this.props.componentId);
  };

  changScreenSearch = () => {
    Navigation.showModal({
      component: {
        name: 'Search',
      },
    });
  };

  render() {
    const DATA = offlineData.Data.References.Categories;
    console.log('data', DATA);

    return (
      <View>
        <SafeAreaView>
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
              <Text style={styles.title}>Thể loại</Text>
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

          <ScrollView>
            <View style={[styles.container, styles.item]}>
              {this.renderItem(DATA)}
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    borderColor: 'red',
    height: 50,
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  container: {
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
    marginTop: 4,
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
  container1: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  text: {
    fontSize: 42,
  },
});
