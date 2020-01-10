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
  AsyncStorage,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {offlineData} from '../../utils/offlineData';
import Book from '../../component/Book';
import Comment from './components/comment';
import {onSignIn} from '../../navigation';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      isShowForm: true,
      heartEmpty: false,
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

  onAddToCard = () => {
    this.onCheck();
  };

  onCheck = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);
      console.log(parsed);
      if (parsed === null) {
        // this.onPress();
        onSignIn();
      } else {
        this.onPress();
      }
    } catch (error) {
      alert(error);
    }
  };

  onPress = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'ShoppingCard',
              passProps: {},
              options: {
                topBar: {
                  title: {
                    text: '',
                    alignment: 'center',
                  },
                  visible: false,
                },
              },
            },
          },
        ],
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
            {this.state.heartEmpty === false ? (
              <Icon
                name="ios-heart"
                size={30}
                color="red"
                onPress={() => {
                  this.setState({heartEmpty: !this.state.heartEmpty});
                }}
              />
            ) : (
              <Icon
                name="ios-heart-empty"
                size={30}
                color="#fc9619"
                onPress={() => {
                  this.setState({heartEmpty: !this.state.heartEmpty});
                }}
              />
            )}
          </View>
        </View>
        <ScrollView orientation="vertical">
          <View style={style.viewimage}>
            <Image source={{uri: this.props.data}} style={style.styleImage} />
          </View>

          <View style={style.viewBookInfor}>
            <Text style={style.styleText}>{this.props.namebook}</Text>
            <Text style={style.author}>{this.props.authorName}</Text>
          </View>

          <View style={style.viewRank}>
            <View>
              <TouchableOpacity style={style.rank}>
                <Icon name="ios-star" size={25} color="#fc9619" />
                <Icon name="ios-star" size={25} color="#fc9619" />
                <Icon name="ios-star" size={25} color="#fc9619" />
                <Icon name="ios-star" size={25} color="#fc9619" />
                <Icon name="ios-star" size={25} color="#979797" />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                margin: 20,
              }}>
              <Icon name="ios-pricetags" size={22} color="#fc9619" />
              <Text style={{fontSize: 17, marginLeft: 5, marginTop: -2}}>
                {this.props.rank}
              </Text>
            </View>
          </View>

          <View style={style.viewSameBook}>
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
                  OverallStarRating={
                    offlineData.Data.NewBooks[item].OverallStarRating
                  }
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
          <Comment />
          <Comment />
          <Text
            style={{
              textAlign: 'center',
              color: '#2bb6f9',
              fontSize: 18,
              marginVertical: 20,
            }}>
            Xem tất cả nhận xét
          </Text>
          <View>
            <TouchableWithoutFeedback onPress={this.onAddToCard}>
              <Text style={style.buttonAddToCard}>Thêm vào giỏ</Text>
            </TouchableWithoutFeedback>
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

  container: {
    flex: 1,
    marginTop: 1,
  },
  category: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },

  topbar: {
    paddingLeft: 15,
    paddingTop: 20.5,
    fontSize: 10.5,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 15,
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
  styleText: {
    fontSize: 20,
  },
  viewimage: {
    marginHorizontal: 80,
    marginVertical: 5,
  },
  viewBookInfor: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    marginVertical: 20,
  },
  author: {
    color: 'gray',
    fontSize: 19,
  },
  viewRank: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    marginVertical: -20,
  },
  rank: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20.5,
    paddingTop: 5,
    flex: 3.5,
    marginVertical: 10,
  },
  buttonAddToCard: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
    textAlign: 'center',
    backgroundColor: 'orange',
    color: 'white',
  },
  viewSameBook: {
    marginHorizontal: 15,
    marginVertical: 35,
    flexDirection: 'column',
  },
});
