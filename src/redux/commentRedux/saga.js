import {call, put, takeLatest} from 'redux-saga//effects';
import {
  getCommentSuccess,
  getCommentFailure,
  addCommentSuccess,
  addCommentFailure,
} from './actions';
import {GET_COMMENT, ADD_COMMENT} from '../constants/actionTypes';
import {getComments, addComment} from '../../api/reviews';
// import {onChangeIntoMainScreen, onSignIn} from '../../navigation';
import {AsyncStorage} from 'react-native';

export function* addCommentSaga(commentData) {
  try {
    const response = yield call(
      addComment,
      commentData.commentData,
      commentData.userToken,
    );
    console.log(response);
    // const data = response.data;
    // yield put(addCommentSuccess(data));
  } catch (error) {
    console.log('error', error.toJSON());
    yield put(addCommentFailure({error}));
  }
}

export function* getCommentSaga({idBook}) {
  try {
    const response = yield call(getComments, idBook);
    const commentData = response.data.Reviews;
    yield put(getCommentSuccess(commentData));
  } catch (error) {
    yield put(getCommentFailure(error));
  }
}

const commentSagas = () => [
  takeLatest(GET_COMMENT, getCommentSaga),
  takeLatest(ADD_COMMENT, addCommentSaga),
];

export default commentSagas();
