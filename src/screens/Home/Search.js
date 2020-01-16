import React, {Component} from 'react';
import Icon1 from 'react-native-vector-icons/thebook-appicon';
import {Navigation} from 'react-native-navigation';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {offlineData} from '../../utils/offlineData';
import {searchData} from '../../utils/searchData';
import {filter, some} from 'lodash';
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
      data: [],
      value: '',
    };
    this.arrayHolder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    this.setState({
      data: searchData,
    });
    this.arrayHolder = searchData;
  };

  itemOnclick = data => {
    this.setState({
      value: data,
    });
  };

  onChangeText = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  backMainScreen = () => {
    Navigation.dismissModal(this.props.componentId);
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayHolder.filter(item => {
      const itemData = `${item.toUpperCase()} ${item.toUpperCase()} ${item.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
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
      // this.state.value === '' ? null : this.changScreenSearch();
      this.arrayHolder.filter(item => {
        item === this.state.value ? this.changScreenSearch() : null;
      });
    }
  };

  render() {
    return (
      <View style={styles.main}>
        <Icon1
          name="ic-delete"
          size={28}
          color="#5f5f5f"
          onPress={() => this.backMainScreen()}
        />
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.textInput}
            placeholder="Hãy nhập tên sách mà bạn muốn tìm!"
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}
            value={this.state.value}
          />

          <Icon1
            name="ic-search"
            size={26}
            color="#5f5f5f"
            onPress={() => this.onPress()}
          />
        </View>
        <Text style={styles.common}>Các từ khóa thông dụng</Text>
        <FlatList
          style={styles.list}
          data={this.state.data}
          renderItem={({item}) => (
            <Text
              style={styles.listsearch}
              onPress={() => this.itemOnclick(item)}>
              {item}
            </Text>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    paddingTop: 10,
  },
  main: {
    padding: 10,
  },
  listsearch: {
    paddingLeft: 10,
    color: '#4a4a4a',
    fontSize: 20,
    paddingBottom: 5,
  },
  common: {
    color: '#ababab',
    paddingLeft: 10,
  },
  input: {
    height: 30,
  },
  search: {
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
  },
  textInput: {
    flex: 1,
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },

  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});

//       <View style={styles.container}>
//         <View style={styles.SectionStyle}>
//           <Image
//             //We are showing the Image from online
//             source={{
//               uri:
//                 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',
//             }}
//             //You can also show the image from you project directory like below
//             //source={require('./Images/user.png')}

//             //Image Style
//             style={styles.ImageStyle}
//           />

//           <TextInput
//             style={{flex: 1}}
//             placeholder="Enter Your Name Here"
//             underlineColorAndroid="transparent"
//           />
//         </View>
//         <View style={styles.SectionStyle}>
//           <TextInput
//             style={{flex: 1}}
//             placeholder="Enter Your Mobile No Here"
//             underlineColorAndroid="transparent"
//           />
//           <Image
//             //We are showing the Image from online
//             source={{
//               uri:
//                 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_phone.png',
//             }}
//             //You can also show the image from you project directory like below
//             //source={require('./Images/phone.png')}

//             //Image Style
//             style={styles.ImageStyle}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10,
//   },

//   SectionStyle: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderWidth: 0.5,
//     borderColor: '#000',
//     height: 40,
//     borderRadius: 5,
//     margin: 10,
//   },

//   ImageStyle: {
//     padding: 10,
//     margin: 5,
//     height: 25,
//     width: 25,
//     resizeMode: 'stretch',
//     alignItems: 'center',
//   },
// });
