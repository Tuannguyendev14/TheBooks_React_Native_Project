import {call, put, takeLatest} from 'redux-saga//effects';
import {getComment, getCommentSuccess, getCommentFailure} from './actions';
import {GET_COMMENT} from '../constants/actionTypes';
import {getComments} from '../../api/reviews';
// import {onChangeIntoMainScreen, onSignIn} from '../../navigation';
import {AsyncStorage} from 'react-native';

// export function* registerSaga(action) {
//   try {
//     const response = yield call(register, action.data);
//     const data = response.data;
//     yield put(addUserSuccess(data));
//     AsyncStorage.setItem('user', JSON.stringify(data));
//     onChangeIntoMainScreen();
//     console.log('response', response);
//   } catch (error) {
//     console.log('error', error.toJSON());
//     yield put(addUserFailure({error}));
//   }
// }

// export function* updateTaskSaga({id, task}) {
//     try {
//       const response = yield call(updateTask, id, task);
//       const data = response.data;
//       console.log(id, task);
//       yield put(updateTaskSuccess(id, task));
//     } catch (error) {
//       console.log(error);
//     }
//   }

export function* getCommentSaga({idBook}) {
  try {
    const response = yield call(getComments, idBook);
    const commentData = response.data.Reviews;
    yield put(getCommentSuccess(commentData));
  } catch (error) {
    yield put(getCommentFailure(error));
  }
}

const commentSagas = () => [takeLatest(GET_COMMENT, getCommentSaga)];

export default commentSagas();
