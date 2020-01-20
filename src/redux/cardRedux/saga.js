import {call, put, takeLatest} from 'redux-saga/effects';
import {
  addCardSuccess,
  addCardFailure,
  addCard,
  getCardFailure,
  getCardSuccess,
  deleteCardFailure,
  deleteCardSuccess,
} from './action';
import store from '../store';
import {AsyncStorage} from 'react-native';
import {addToCard, getCard, deleteCard} from '../../api/card';
import {ADD_CARD, GET_CARD, DELETE_CARD} from '../constants/actionTypes';
export function* addCardSaga(data) {
  try {
    const response = yield call(addToCard, data.data, data.token);
    AsyncStorage.setItem('idbasket', response.data.Data.Id);
    const data1 = response.data;
    alert('Thêm thành công');
    yield put(addCardSuccess(data1));
  } catch (error) {
    console.log('add saga error:', error);
    yield put(addCardFailure(error));
  }
}
export function* getCardSaga({data, token}) {
  try {
    const response = yield call(getCard, data, token);
    const listCard = response.data;
    yield put(getCardSuccess(listCard));
  } catch (error) {
    yield put(getCardFailure(error));
  }
}
export function* deleteCardSaga({data, token}) {
  try {
    const response = yield call(deleteCard, data, token);
    alert('Xóa thành công');
    yield put(deleteCardSuccess(response));
  } catch (error) {
    yield put(deleteCardFailure(error));
  }
}
const cardSaga = () => [
  takeLatest(ADD_CARD, addCardSaga),
  takeLatest(GET_CARD, getCardSaga),
  takeLatest(DELETE_CARD, deleteCardSaga),
];
export default cardSaga();
