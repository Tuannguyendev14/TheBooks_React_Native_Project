import {call, put, takeLatest} from 'redux-saga/effects';
import {getBookFailure, getBookSuccess, getBookDetailSuccess} from './actions';
import {getBook, getBookDetail} from '../../api/book';
import {GET_BOOK, GET_BOOK_DETAIL} from '../constants/actionTypes';

export function* getBookSaga() {
  try {
    const response = yield call(getBook);
    const bookData = response.data.Data;
    yield put(getBookSuccess(bookData));
    // console.log('response.data ', bookData);
  } catch (error) {
    yield put({type: getBookFailure, payload: error});
  }
}

export function* getBookDetailSaga({idBook}) {
  try {
    const response = yield call(getBookDetail, idBook);
    const bookDetailData = response.data;
    // console.log('bookDetailData', bookDetailData);
    yield put(getBookDetailSuccess(bookDetailData));
  } catch (error) {}
}

const bookSagas = () => [
  takeLatest(GET_BOOK, getBookSaga),
  takeLatest(GET_BOOK_DETAIL, getBookDetailSaga),
];
export default bookSagas();
