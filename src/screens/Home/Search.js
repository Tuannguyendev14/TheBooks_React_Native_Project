import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
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
export default class Search extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Icon name="ios-close" size={41} color="#5f5f5f" />
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.textInput}
            placeholder="Hãy nhập tên sách mà bạn muốn tìm!"
          />
          <Image
            source={{
              uri:
                'https://cdn4.iconfinder.com/data/icons/ios7-essence/22/common_search_lookup__-512.png',
            }}
            style={styles.ImageStyle}
          />
        </View>
        <Text style={styles.common}>Các từ khóa thông dụng</Text>
        <FlatList
          style={styles.list}
          data={searchData}
          renderItem={({item}) => <Text style={styles.listsearch}>{item}</Text>}
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
    //paddingTop: 10,
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
