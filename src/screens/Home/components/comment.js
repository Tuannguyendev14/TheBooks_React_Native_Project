import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import iconProfile from '../../../../assets/images/profile-icon.png';

export default class comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowButton: false,
    };
  }

  componentWillMount() {
    this.onCheckUserId();
  }

  onCheckUserId = () => {
    let userId = this.props.userId;
    let userIdMember = this.props.userIdMember;

    if (userId === userIdMember) {
      this.setState({
        isShowButton: true,
      });
    } else {
      this.setState({
        isShowButton: false,
      });
    }
  };

  onDeleteComment = () => {
    alert('xoa');
  };

  onEditComment = (Id, userId, comment, starRating) => {
    this.props.parentFlatList.refs.updateModal.showEditModal(
      Id,
      userId,
      comment,
      starRating,
    );
  };

  render() {
    const isShowButton = this.state.isShowButton;
    const {
      starRating,
      userImage,
      name,
      comment,
      userIdMember,
      userId,
      Id,
    } = this.props;

    const showImage =
      userImage === '' ? (
        <Image source={iconProfile} style={styles.image} />
      ) : (
        // <Text>ok</Text>
        <Image source={{uri: userImage}} style={styles.image} />
      );

    const showButton = isShowButton ? (
      <View style={styles.viewbutton}>
        <View style={{margin: 10}}>
          <TouchableWithoutFeedback
            onPress={() => {
              this.onEditComment(Id, userId, comment, starRating);
            }}>
            <Icon name="ic-edit-comment" size={25} color="" />
          </TouchableWithoutFeedback>
        </View>
        <View>
          <TouchableWithoutFeedback onPress={this.onDeleteComment}>
            <Icon name="ic-trash" size={25} color="" />
          </TouchableWithoutFeedback>
        </View>
      </View>
    ) : (
      <Text />
    );

    let star = [];
    let starOutline = [];
    for (let i = 0; i < starRating; i++) {
      star.push(<Icon name="star" size={20} color="#fc9619" />);
    }
    for (let i = 0; i < 5 - starRating; i++) {
      starOutline.push(<Icon name="star" size={20} color="#c3c1c1" />);
    }

    return (
      <View style={styles.container}>
        <View style={styles.ViewControl}>
          {/* <Image source={{uri: userImage}} style={styles.image} /> */}
          {showImage}
          <View style={styles.viewname}>
            <Text>{name}</Text>
            <View style={styles.star}>
              {star}
              {starOutline}
            </View>
          </View>

          {showButton}
        </View>
        <View style={styles.viewcomment}>
          <Text style={styles.textcomment} numberOfLines={8}>
            {comment}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  ViewControl: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  viewname: {
    flex: 5,
    margin: 5,
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewbutton: {
    alignItems: 'center',
    flex: 2,
    flexDirection: 'row',
  },
  viewcomment: {
    marginVertical: 15,
  },
  textcomment: {
    fontSize: 15,
    color: 'gray',
  },
});
