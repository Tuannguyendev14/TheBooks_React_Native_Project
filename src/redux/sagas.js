import {all} from 'redux-saga/effects';
import bookSagas from './bookRedux/saga';

function* rootSagas() {
  yield all(bookSagas);
}

export default rootSagas;
