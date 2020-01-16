import React, {Component} from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  LoadingPage,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
  AsyncStorage,
} from 'react-native';
import {connect} from 'react-redux';
import {getBook} from '../../redux/bookRedux/actions';
import {getCard, deleteCard} from '../../redux/cardRedux/action';
import Icon1 from 'react-native-vector-icons/thebook-appicon';
import Book from '../ShoppingCard/components/bookOrder';
import {Navigation} from 'react-native-navigation';
import {List} from 'react-native-paper';
class ShoppingCard extends Component {
  // componentDidMount() {
  //   this.props.onGetCard(this.props.idbasket, this.props.token);
  //   console.log('got data card:', this.props.card);
  // }
  // componentDidUpdate() {
  //   this.props.onGetCard(this.props.idbasket, this.props.token);
  // }
  // componentWillUnmount() {
  //   this.props.onGetCard(this.props.idbasket, this.props.token);
  // }
  componentWillMount() {
    this.props.onGetCard(this.props.idbasket, this.props.token);
  }
  listEmptyComponent = () => {
    return (
      <View>
        <Text style={styles.empty}>Giỏ hàng trống</Text>
      </View>
    );
  };
  onCheck = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let idbasket = await AsyncStorage.getItem('idbasket');
      let parsed = JSON.parse(user);
      //console.log('user:', parsed.Data.Id);
      if (parsed === null) {
        // this.onPress();
        //onSignIn();
      } else {
        let data = {
          BookId: this.props.id,
          DeleteAll: true,
          UserId: parsed.Data.Id,
        };
        await this.props.onDeleteAllCard(data, parsed.Token.access_token);
        Navigation.setRoot({
          root: {
            component: {
              name: 'Home',
            },
          },
        });
        //alert('Đã xóa tất cả sách trong giỏ hàng !');
      }
    } catch (error) {
      alert(error);
    }
  };
  back = () => {
    Navigation.dismissAllModals();
  };
  render() {
    const card = this.props.card.data.Data;
    //console.log('get data card:', this.props.card.data.Data);
    if (card == null || card === 'undefined') {
      return (
        <View style={styles.container}>
          <View style={styles.top}>
            <Icon1
              onPress={() => this.back()}
              style={styles.back}
              name="ic-back"
              size={25}
              color="#5f5f5f"
            />
            <Text style={styles.text}>Giỏ hàng</Text>
            <Icon1
              style={styles.trash}
              name="ic-trash"
              size={25}
              color="#5f5f5f"
            />
          </View>
          <View style={styles.center}>
            <Text>Giỏ hàng trống</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.top}>
            <Icon1
              onPress={() => this.back()}
              style={styles.back}
              name="ic-back"
              size={25}
              color="#5f5f5f"
            />
            <Text style={styles.text}>Giỏ hàng</Text>
            <Icon1
              onPress={() => this.onCheck()}
              style={styles.trash}
              name="ic-trash"
              size={25}
              color="#5f5f5f"
            />
          </View>
          <ScrollView style={styles.center}>
            <FlatList
              style={styles.list}
              data={card.Items}
              renderItem={({item}) => (
                <Book
                  image={
                    item.Book.Medias[0]
                      ? item.Book.Medias[0].ImageUrl
                      : 'https://the-books-dev-files.s3.amazonaws.com/Image/1533113457208_1533113324978_web.jpg'
                  }
                  name={item.Book.Publishers[0].Name}
                  author={item.Book.Authors[0].Name}
                  count={item.Book.Quantity}
                  id={item.Book.Id}
                  quantity={item.Book.Quantity}
                  price={item.Book.Price}
                />
              )}
              ListEmptyComponent={this.listEmptyComponent}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </ScrollView>

          {/* <View style={styles.bot}>
            <TouchableWithoutFeedback onPress={this.onAddToCard}>
              <Text style={styles.buttonAddToCard}>Đặt sách</Text>
            </TouchableWithoutFeedback>
          </View> */}
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  // bot: {
  //   //bottom: 15,
  //   position: 'absolute',
  //   alignSelf: 'flex-end',
  // },
  buttonAddToCard: {
    //position: 'absolute',
    //alignSelf: 'flex-end',
    //top: 10,
    fontSize: 25,
    fontWeight: 'bold',
    padding: 15,
    textAlign: 'center',
    backgroundColor: '#fc9619',
    color: 'white',
  },
  empty: {
    fontSize: 22,
    textAlign: 'center',
  },
  center: {
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
    borderRadius: 5,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
    borderRadius: 5,
    paddingBottom: 10,
  },
  container: {
    padding: 10,
    paddingTop: 30,
    flexDirection: 'column',
  },
  trash: {
    alignItems: 'flex-end',
    flex: 0.5,
  },
  back: {
    flex: 1,
  },
  text: {
    alignItems: 'center',
    textAlign: 'center',
    flex: 5,
    fontSize: 20,
    color: '#4a4a4a',
  },
  list: {
    paddingTop: 10,
  },
});
const mapStateToProps = state => {
  console.log('map', state.CardReducer);
  return {
    book: state.bookReducer,
    card: state.CardReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetBooks: () => dispatch(getBook()),
    onGetCard: (data, token) => dispatch(getCard(data, token)),
    onDeleteAllCard: (data, token) => dispatch(deleteCard(data, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCard);
