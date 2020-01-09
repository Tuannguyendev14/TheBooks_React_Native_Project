
import userSagas from './userRedux/saga';
import bookSagas from './bookRedux/saga';
import {all} from 'redux-saga/effects';

function* rootSagas() {
  yield all([...userSagas, ...bookSagas]);
}

export default rootSagas;
