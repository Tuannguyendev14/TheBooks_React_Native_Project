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
import {AsyncStorage} from 'react-native';
import {addToCard, getCard, deleteCard} from '../../api/card';
import {ADD_CARD, GET_CARD} from '../constants/actionTypes';
export function* addCardSaga(data) {
  try {
    const response = yield call(addToCard, data.data, data.token);
    console.log('response', response.data.Data.Id);
    AsyncStorage.setItem('idbasket', response.data.Data.Id);
    // const data1 = response.data;
    // yield put(addCardSuccess(data1));
  } catch (error) {
    console.log('saga error:', error);
    yield put(addCardFailure(error));
  }
}
export function* getCardSaga({data, token}) {
  try {
    console.log('thong tin:', data);
    const response = yield call(getCard, data, token);
    const data1 = response.data;
    yield put(getCardSuccess(data1));
    console.log('card ', response);
  } catch (error) {
    yield put(getCardFailure(error));
  }
}
export function* deleteCardSaga({data, token}) {
  try {
    console.log('thong tin:', data);
    const response = yield call(deleteCard, data, token);
    console.log('delete: ', response);
    yield put(deleteCardSuccess(response));
  } catch (error) {
    yield put(deleteCardFailure(error));
  }
}
const cardSaga = () => [
  takeLatest(ADD_CARD, addCardSaga),
  takeLatest(GET_CARD, getCardSaga),
];
export default cardSaga();
