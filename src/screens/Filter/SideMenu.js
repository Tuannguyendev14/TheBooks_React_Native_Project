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
import {map, filter} from 'lodash';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: false,
      value: '',
    };
  }

  renderItem = DATA => {
    return DATA.map(item => (
      <View>
        <List.Accordion title={item.Name}>
          {item.SubCategories.map(listItem => (
            <View style={{flexDirection: 'row', flex: 1}}>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => {
                    <Text>{this.setState({value: listItem.Name})}</Text>;
                  }}
                  // onPress={() => {
                  //   this.setState({
                  //     ticker: !this.state.ticker,
                  //   });
                  //   this.state.ticker === false ? (
                  //     <Text>{this.setState({value: listItem.Name})}</Text>
                  //   ) : (
                  //     <Text>{this.setState({value: listItem.Name})}</Text>
                  //   );
                  // }}
                >
                  <List.Item
                    id={item.Id}
                    style={{marginHorizontal: 10}}
                    title={listItem.Name}
                  />
                </TouchableOpacity>
              </View>
              <View>
                {this.state.value === listItem.Name ? (
                  // &&
                  // this.state.ticker === true
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

  changScreenSearch = data => {
    Navigation.showModal({
      component: {
        name: 'Filter',
        passProps: {
          value: this.state.value,
        },
      },
    });
  };
  onPress = () => {
    {
      this.state.value === '' ? null : this.changScreenSearch();
    }
  };
  render() {
    const DATA = offlineData.Data.References.Categories;

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
              {map(DATA, item => (
                <View>
                  <List.Accordion title={item.Name}>
                    {map(item.SubCategories, listItem => (
                      <View style={{flexDirection: 'row', flex: 1}}>
                        <View style={{flex: 1}}>
                          <TouchableOpacity
                            onPress={() => {
                              <Text>
                                {this.setState({value: listItem.Name})}
                              </Text>;
                            }}
                            // onPress={() => {
                            //   this.setState({
                            //     ticker: !this.state.ticker,
                            //   });
                            //   this.state.ticker === false ? (
                            //     <Text>{this.setState({value: listItem.Name})}</Text>
                            //   ) : (
                            //     <Text>{this.setState({value: listItem.Name})}</Text>
                            //   );
                            // }}
                          >
                            <List.Item
                              id={item.Id}
                              style={{marginHorizontal: 10}}
                              title={listItem.Name}
                            />
                          </TouchableOpacity>
                        </View>
                        <View>
                          {this.state.value === listItem.Name ? (
                            // &&
                            // this.state.ticker === true
                            <Icon name="ic-tick" size={20} color="#5f5f5f" />
                          ) : (
                            <Text></Text>
                          )}
                        </View>
                      </View>
                    ))}
                  </List.Accordion>
                </View>
              ))}
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
    backgroundColor: '#fc9619',
    padding: 10,
  },
});

const mapStateToProps = state => {
  return {
    book: state.bookReducer,
  };
};

export default connect(mapStateToProps, null)(SideMenu);
