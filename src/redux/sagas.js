import {all} from 'redux-saga/effects';
import userSagas from './userRedux/saga';
import bookSagas from './bookRedux/saga';
import commentSagas from './commentRedux/saga';
import relatedBookSagas from './relatedBooksRedux/saga';

function* rootSagas() {
  yield all([...userSagas, ...bookSagas, ...commentSagas, ...relatedBookSagas]);
}

export default rootSagas;
