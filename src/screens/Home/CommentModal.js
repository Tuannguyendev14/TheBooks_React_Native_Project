import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Platform,
  Image,
  Dimensions,
  TouchableOpacity,
  View,
  Textarea,
} from 'react-native';

//npm install react-native-modalbox@latest --save
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/Ionicons';

//npm i react-native-button
import Button from 'react-native-button';
// import flatListData from './FlatListData';

var screen = Dimensions.get('window');

class CommentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newFoodName: '',
      newDescription: '',
    };
  }

  showAddModal = () => {
    this.refs.myModal.open();
  };

  render() {
    return (
      <Modal
        ref={'myModal'}
        style={style.styleModal}
        position="center"
        backdrop={true}>
        <Text style={style.styleTitle}>Đánh giá</Text>

        <View style={style.rank}>
          <Icon name="ios-star" size={30} color="#fc9619" />
          <Icon name="ios-star" size={30} color="#fc9619" />
          <Icon name="ios-star" size={30} color="#fc9619" />
          <Icon name="ios-star" size={30} color="#fc9619" />
          <Icon name="ios-star" size={30} color="#979797" />
        </View>

        <View>
          <TextInput
            style={style.styleTextInput}
            placeholder="Enter food name"
            value={this.state.newFoodName}
            onChangeText={text => this.setState({newFoodName: text})}
          />
          {/* <Textarea rowSpan={5} bordered placeholder="Textarea" /> ); } } */}
        </View>

        {/* <Button
          style={style.styleButtonAdd}
          onPress={() => {
            if (
              this.state.newFoodName.length == 0 ||
              this.state.newDescription.length == 0
            ) {
              alert('Enter name & description!');
              return;
            }
            const newKey = this.generateKey(24);
            const newFood = {
              key: newKey,
              name: this.state.newFoodName,
              imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTULo0hDbX8PTvrSg8hvPB7mFG5cPgnymlNIoj4Y_tFpVSukASl&sg',
              description: this.state.newDescription,
            };

            // flatListData.push(newFood);
            this.props.parentFlatList.refreshFlatList(newKey);
            this.refs.myModal.close();
          }}>
          Save
        </Button> */}
      </Modal>
    );
  }
}

const style = StyleSheet.create({
  styleModal: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Platform.OS === 'ios' ? 30 : 0,
    shadowRadius: 40,
    width: screen.width - 80,
    height: 380,
    marginTop: 90,
  },
  styleTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  rank: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  styleTextInput: {
    height: 40,
    borderBottomColor: 'gray',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  styleButtonAdd: {
    fontSize: 18,
    color: 'white',
    padding: 8,
    marginLeft: 70,
    marginRight: 70,
    marginTop: 10,
    height: 40,
    borderRadius: 6,
    backgroundColor: 'green',
  },
});

export default CommentModal;

// ; import { Container, Header, Content, Textarea, Form } from "native-base"; export default class TextArea extends Component { render() { return (

//     <Textarea rowSpan={5} bordered placeholder="Textarea" /> ); } } {%- language name="Vue Native", type="vue" -%} {%- endcodetabs %}
