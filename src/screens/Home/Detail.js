import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {offlineData} from '../../utils/offlineData';
import Book from '../../component/Book';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      isShowForm: true,
    };
  }
  backMainScreen = () => {
    Navigation.dismissAllModals();
  };

  // Dong mo form , xet gia tri nguoc lai
  onShowForm = () => {
    if (this.state.isShowForm) {
      this.setState({
        isShowForm: true,
      });
    } else {
      this.setState({
        isShowForm: !this.state.isShowForm,
      });
    }
  };

  changScreenShowAll = (data, title) => {
    Navigation.showModal({
      component: {
        name: 'ShowAllBook',
        passProps: {
          data: data,
          title: title,
        },
      },
    });
  };

  render() {
    console.log(this.state);

    const elmTaskForm =
      this.state.isShowForm === true ? (
        <TextInput
          style={style.styleTextInput}
          value={this.state.comment}
          placeholder={'Viết nhận xét cho cuốn sách này'}
          onChangeText={text => this.setState({comment: text})}
        />
      ) : (
        ''
      );

    return (
      <View style={style.container}>
        <View style={style.topbar}>
          <View style={{flex: 1}}>
            <Icon
              name="ios-arrow-back"
              size={30}
              color="#5f5f5f"
              onPress={() => this.backMainScreen()}
            />
          </View>
          <View style={style.search}>
            <Icon
              name="ios-heart-empty"
              size={30}
              color="#5f5f5f"
              onPress={() => this.changScreenSearch()}
            />
          </View>
        </View>
        <ScrollView orientation="vertical">
          <View
            style={{
              marginHorizontal: 80,
              marginVertical: 5,
            }}>
            <Image source={{uri: this.props.data}} style={style.styleImage} />
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 15,
              marginVertical: 20,
            }}>
            <Text style={style.styleText}>{this.props.namebook}</Text>
            <Text style={{color: 'gray', fontSize: 19}}>
              {this.props.authorName}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 15,
              marginVertical: -20,
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="ios-star" size={25} color="#fc9619" />
              <Icon name="ios-star" size={25} color="#fc9619" />
              <Icon name="ios-star" size={25} color="#fc9619" />
              <Icon name="ios-star" size={25} color="#fc9619" />
              <Icon name="ios-star" size={25} color="#979797" />
              <Text style={{margin: 20}}>{this.props.rank}</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginHorizontal: 15,
              marginVertical: 35,
              flexDirection: 'column',
            }}>
            <View style={style.category}>
              <Text style={style.text}>Sách tương tự</Text>
              <Text
                style={style.showall}
                onPress={() =>
                  this.changScreenShowAll(
                    offlineData.Data.NewBooks,
                    'Đọc nhiều',
                  )
                }>
                Xem hết
              </Text>
            </View>
            <FlatList
              style={style.list}
              data={Object.keys(offlineData.Data.MostBorrowBooks)}
              renderItem={({item}) => (
                <Book
                  image={
                    offlineData.Data.MostBorrowBooks[item].Medias[0].ImageUrl
                  }
                  name={offlineData.Data.MostBorrowBooks[item].Shelf.Name}
                  author={
                    offlineData.Data.MostBorrowBooks[item].Authors[0].Name
                  }
                  count={offlineData.Data.MostBorrowBooks[item].Shelf.BookCount}
                  title={offlineData.Data.NewBooks[item].Title}
                />
              )}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={{marginHorizontal: 20}}>
            <Text style={style.text}>Nhận xét</Text>
            <TouchableWithoutFeedback onPress={this.onShowForm}>
              <Text style={style.button}>Viết nhận xét cho cuốn sách này</Text>
            </TouchableWithoutFeedback>
            <Text>{elmTaskForm}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  styleImage: {
    width: '100%',
    height: 280,
  },
  styleTextInput: {
    borderWidth: 2,
    borderColor: '#2bb6f9',
    marginVertical: 10,
    color: '#2bb6f9',
  },
  list: {
    paddingTop: 5,
  },
  showall: {
    alignItems: 'flex-end',
    //paddingLeft: 80,
    color: '#1d9dd8',
    flex: 1,
  },
  text: {
    fontSize: 23,
    paddingTop: 5,
    flex: 3.5,
  },

  container: {
    flex: 1,
    marginTop: 1,
  },
  category: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },

  topbar: {
    paddingLeft: 15,
    paddingTop: 20.5,
    fontSize: 10.5,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  styleSignUpButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    borderWidth: 1.5,
    borderRadius: 12,
    fontSize: 17,
    fontWeight: 'bold',
    padding: 15,
    textAlign: 'center',
    backgroundColor: 'white',
    borderColor: '#2bb6f9',
    color: '#2bb6f9',
    flex: 1,
    margin: 10,
  },
});
