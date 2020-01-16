import {call, put, takeLatest} from 'redux-saga/effects';
import {getNotificationSuccess, getNotificationFailure} from './action';
import store from '../store';
import {AsyncStorage} from 'react-native';
import {getNotification} from '../../api/notification';
import {GET_NOTIFICATION} from '../constants/actionTypes';
export function* getNotificationSaga(data) {
  try {
    const response = yield call(getNotification, data.data, data.token);
    const data1 = response.data;
    // alert(' thành công');
    yield put(getNotificationSuccess(data1));
  } catch (error) {
    alert(error);
    yield put(getNotificationFailure(error));
  }
}

const notificationSaga = () => [
  takeLatest(GET_NOTIFICATION, getNotificationSaga),
];
export default notificationSaga();
