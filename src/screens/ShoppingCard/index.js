import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {getBook} from '../../redux/bookRedux/actions';
import {getCard} from '../../redux/cardRedux/action';
import Icon from 'react-native-vector-icons/thebook-appicon';
import Book from '../ShoppingCard/components/bookOrder';
import {Navigation} from 'react-native-navigation';
import {List} from 'react-native-paper';
import {get} from 'lodash';

class ShoppingCard extends Component {
  componentWillMount() {
    this.props.onGetCard(this.props.idbasket, this.props.token);
  }

  listEmptyComponent = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text>Hiện tại không có sách trong giỏ hàng</Text>
      </View>
    );
  };

  back = () => {
    Navigation.dismissModal(this.props.componentId);
  };

  render() {
    const card = this.props.card.data.Data;
    console.log('get data card:', card);
    if (card === null || card === undefined) {
      return (
        <View style={styles.container}>
          <View style={styles.top}>
            <Icon
              onPress={() => this.back()}
              style={styles.back}
              name="ic-back"
              size={25}
              color="#5f5f5f"
            />
            <Text style={styles.text}>Giỏ hàng</Text>
            <Icon
              style={styles.trash}
              name="ic-trash"
              size={25}
              color="#5f5f5f"
            />
          </View>
          <View style={styles.center}>
            <Text>Hiện tại không có sách trong giỏ hàng</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.top}>
            <Icon
              onPress={() => this.back()}
              style={styles.back}
              name="ic-back"
              size={25}
              color="#5f5f5f"
            />
            <Text style={styles.text}>Giỏ hàng</Text>
            <Icon
              style={styles.trash}
              name="ic-trash"
              size={25}
              color="#5f5f5f"
            />
          </View>

          <FlatList
            style={styles.list}
            data={card.Items}
            renderItem={({item}) => (
              <Book
                image={
                  get(item, 'Book.Medias.0')
                    ? get(item, 'Book.Medias.0.ImageUrl')
                    : 'https://the-books-dev-files.s3.amazonaws.com/Image/1533113457208_1533113324978_web.jpg'
                }
                name={get(item, 'Book.Publishers.0.Name')}
                author={get(item, 'Book.Authors.0.Name')}
                count={get(item, 'Book.Quantity')}
                id={get(item, 'Book.Id')}
              />
            )}
            ListEmptyComponent={this.listEmptyComponent}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  center: {
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
    borderRadius: 5,
    marginVertical: 20,
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
    flex: 1,
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
    marginBottom: 70,
  },
});
const mapStateToProps = state => {
  return {
    book: state.bookReducer,
    card: state.CardReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetBooks: () => dispatch(getBook()),
    onGetCard: (data, token) => dispatch(getCard(data, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCard);
