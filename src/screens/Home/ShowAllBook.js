import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Icon1 from 'react-native-vector-icons/thebook-appicon';
import Book from '../../component/Book';
import {Navigation} from 'react-native-navigation';
import {get} from 'lodash';

export default class ShowAllBook extends Component {
  componentDidMount() {
    console.log(this.props.data);
  }

  backMainScreen = () => {
    Navigation.dismissModal(this.props.componentId);
  };

  render() {
    const {title, data} = this.props;
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.viewIcon}>
            <Icon1
              name="ic-back"
              size={25}
              color="#5f5f5f"
              onPress={() => this.backMainScreen()}
            />
          </View>

          <View
            style={{
              flex: 3,
            }}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>

        <View>
          <FlatList
            style={styles.list}
            data={data}
            renderItem={({item}) => (
              <Book
                style={styles.book}
                image={get(item, 'Medias.0.ImageUrl')}
                name={get(item, 'Shelf.Name')}
                author={get(item, 'Authors.0.Name')}
                count={get(item, 'Shelf.BookCount')}
                OverallStarRating={get(item, 'OverallStarRating')}
              />
            )}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 80,
  },

  title: {
    color: '#262626',
    fontSize: 25.5,
    paddingTop: 10,
  },
  viewIcon: {
    justifyContent: 'center',
    flex: 1,
  },
  book: {
    flex: 0.5,
  },
});
