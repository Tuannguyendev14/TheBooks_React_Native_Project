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
  TextInput,
} from 'react-native';
import {offlineData} from '../../utils/offlineData';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/thebook-appicon';
import {List} from 'react-native-paper';

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: false,
      name: '',
    };
  }

  componentDidMount() {
    const DATA = offlineData.Data.References.Categories;
    console.log('Log at Categories', DATA);
    return (
      <View>
        <Text>aa</Text>
      </View>
    );
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
                      name: listItem.Name,
                    });
                  }}>
                  <List.Item
                    id={item.Id}
                    style={{marginHorizontal: 10}}
                    title={listItem.Name}
                  />
                </TouchableOpacity>
              </View>
              <View>
                {this.state.name === listItem.Name ? (
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
  render() {
    const DATA = offlineData.Data.References.Categories;
    console.log('data', DATA);

    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <SafeAreaView>
          <View style={styles.header}>
            <View
              style={{flexDirection: 'row', flex: 2, borderTopColor: 'red'}}>
              <TextInput placeholder="Tìm thể loại" />
            </View>
            <View>
              <TouchableOpacity style={{marginTop: 12, alignItems: 'flex-end'}}>
                <Icon name="ic-search" size={20} color="#5f5f5f" />
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
