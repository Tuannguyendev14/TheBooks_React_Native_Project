import {call, put, takeLatest} from 'redux-saga/effects';
import {GET_BOOK_FAILURE, getBookSuccess} from './actions';
import {onChangeIntoMainScreen} from '../../navigation';
import {getBook} from '../../api/book';

export function* getBookSaga() {
  try {
    const response = yield call(getBook);
    const data = response.data;
    yield put(getBookSuccess(data));
    // onChangeIntoMainScreen(response.data);
    console.log('response.data ', response);
  } catch (error) {
    yield put({type: GET_BOOK_FAILURE, payload: error});
  }
}

const bookSagas = () => [takeLatest('GET_BOOK', getBookSaga)];
export default bookSagas();
