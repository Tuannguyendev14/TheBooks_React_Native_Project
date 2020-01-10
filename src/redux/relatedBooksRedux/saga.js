import {call, put, takeLatest} from 'redux-saga//effects';
import {getRelatedBooks, getRelatedBooksSuccess} from './actions';
import {GET_RELATED_BOOK} from '../constants/actionTypes';
import {getRelatedBook} from '../../api/relatedBooks';

export function* getRelatedBookSaga({idBook}) {
  try {
    const response = yield call(getRelatedBook, idBook);
    const relatedBookData = response.data.Data;
    // console.log(relatedBookData);
    yield put(getRelatedBooksSuccess(relatedBookData));
  } catch (error) {
    console.log(error);
  }
}

const relatedBookSagas = () => [
  takeLatest(GET_RELATED_BOOK, getRelatedBookSaga),
];

export default relatedBookSagas();
