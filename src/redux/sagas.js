import {all} from 'redux-saga/effects';
import userSagas from './userRedux/saga';
import bookSagas from './bookRedux/saga';
import commentSagas from './commentRedux/saga';
import relatedBookSagas from './relatedBooksRedux/saga';
import cardSaga from './cardRedux/saga';
import notificationSaga from './notificationRedux/saga';

function* rootSagas() {
  yield all([
    ...userSagas,
    ...bookSagas,
    ...commentSagas,
    ...relatedBookSagas,
    ...cardSaga,
    ...notificationSaga,
  ]);
}

export default rootSagas;
