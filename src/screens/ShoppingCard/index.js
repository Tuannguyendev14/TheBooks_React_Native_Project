import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {getBook} from '../../redux/bookRedux/actions';
import {getCard} from '../../redux/cardRedux/action';
import Icon1 from 'react-native-vector-icons/thebook-appicon';
import Book from '../ShoppingCard/components/bookOrder';
import {Navigation} from 'react-native-navigation';
import {List} from 'react-native-paper';
class ShoppingCard extends Component {
  componentDidMount() {
    this.props.onGetCard(this.props.idbasket, this.props.token);
    //console.log('card:', this.props.card.data.Data.Items);
  }
  render() {
    const card = this.props.card.data.Data.Items;
    console.log('cc', card);
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Icon1 style={styles.back} name="ic-back" size={25} color="#5f5f5f" />
          <Text style={styles.text}>Giỏ hàng</Text>
          <Icon1
            style={styles.trash}
            name="ic-trash"
            size={25}
            color="#5f5f5f"
          />
        </View>
        <View style={styles.center}>
          <Text>Card</Text>
          <FlatList
            style={styles.list}
            data={card}
            renderItem={({item}) => (
              <Book
                image={item.Book.Medias[0].ImageUrl}
                name={item.Book.Publishers[0].Name}
                author={item.Book.Authors[0].Name}
                count={item.Book.Quantity}
                //id={item.Book.}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
  //console.log('card:', state.CardReducer);
  return {
    book: state.bookReducer,
    card: state.CardReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetBooks: () => dispatch(getBook()),
    onGetCard: (idbasket, token) => dispatch(getCard(idbasket, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCard);
