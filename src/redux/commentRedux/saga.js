import {call, put, takeLatest} from 'redux-saga//effects';
import {
  getCommentSuccess,
  getCommentFailure,
  addCommentSuccess,
  addCommentFailure,
  getOutstandingReviewsSuccess,
  getOutstandingReviewsFailure,
} from './actions';
import {
  GET_COMMENT,
  ADD_COMMENT,
  GET_COMMENT_DETAIL,
  GET_OUSTANDING_REVIEWS,
} from '../constants/actionTypes';
import {
  getComments,
  addComment,
  getCommentDetail,
  getOutstandingReviews,
} from '../../api/reviews';

export function* addCommentSaga(commentData) {
  try {
    const response = yield call(
      addComment,
      commentData.commentData,
      commentData.userToken,
    );
    const data = response.data.Data;
    yield put(addCommentSuccess(data));
  } catch (error) {
    let response = error.response.data.Message;
    yield put(addCommentFailure(response));
  }
}

export function* getCommentSaga({idBook}) {
  try {
    const response = yield call(getComments, idBook);
    const commentData = response.data.Reviews;
    yield put(getCommentSuccess(commentData));
  } catch (error) {
    yield put(getCommentFailure(error));
  }
}

export function* getCommentDetailSaga({Id}) {
  try {
    const response = yield call(getCommentDetail, Id);
    // const bookDetailData = response.data;
    console.log('CommentDetailData', response);
    // yield put(getBookDetailSuccess(bookDetailData));
  } catch (error) {}
}

export function* getOustandingReviewsSaga() {
  try {
    const response = yield call(getOutstandingReviews);
    const outstandingReviewsData = response.data.Data.OutstandingReviews;
    yield put(getOutstandingReviewsSuccess(outstandingReviewsData));
  } catch (error) {
    yield put(getOutstandingReviewsFailure(error));
  }
}

const commentSagas = () => [
  takeLatest(GET_COMMENT, getCommentSaga),
  takeLatest(ADD_COMMENT, addCommentSaga),
  takeLatest(GET_COMMENT_DETAIL, getCommentDetailSaga),
  takeLatest(GET_OUSTANDING_REVIEWS, getOustandingReviewsSaga),
];

export default commentSagas();
