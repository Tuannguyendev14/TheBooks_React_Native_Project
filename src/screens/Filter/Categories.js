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
    this.state = {
      ticker: false,
      value: '',
    };
  }

  renderItem = DATA => {
    console.log('state: ', this.state);

    return DATA.map(item => (
      <View>
        <List.Accordion title={item.Name}>
          {item.SubCategories.map(listItem => (
            <View style={{flexDirection: 'row', flex: 1}}>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      ticker: !this.state.ticker,
                    });
                    this.state.ticker === false ? (
                      <Text>{this.setState({value: listItem.Name})}</Text>
                    ) : (
                      <Text>{this.setState({value: ''})}</Text>
                    );
                  }}>
                  <List.Item
                    id={item.Id}
                    style={{marginHorizontal: 10}}
                    title={listItem.Name}
                  />
                </TouchableOpacity>
              </View>
              <View>
                {this.state.name === listItem.Name &&
                this.state.ticker === true ? (
                  <Icon name="ic-tick" size={20} color="#5f5f5f" />
                ) : (
                  <Text></Text>
                )}
              </View>
            </View>
          ))}
        </List.Accordion>
      </View>
    ));
  };

  backMainScreen = () => {
    Navigation.dismissModal(this.props.componentId);
  };

  changScreenSearch = data => {
    Navigation.showModal({
      component: {
        name: 'Filter',
        passProps: {
          value: this.state.name,
        },
      },
    });
  };
  onPress = () => {
    console.log('value: ', this.state.name);
    {
      this.state.value === '' ? null : this.changScreenSearch();
    }
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

          <ScrollView style={{marginVertical: 70, marginTop: -10}}>
            <View style={[styles.container, styles.item]}>
              {this.renderItem(DATA)}
            </View>
            <View style={[styles.container, styles.item]}>
              <TouchableOpacity style={styles.button} onPress={this.onPress}>
                <Text> Tìm kiếm </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
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
  },
  text: {
    fontSize: 42,
  },
});
