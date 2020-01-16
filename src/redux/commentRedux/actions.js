import * as types from '../constants/actionTypes';
import store from '../store';

export const getComment = idBook => {
  return {
    type: types.GET_COMMENT,
    idBook,
  };
};

export const getCommentSuccess = response => {
  return {
    type: types.GET_COMMENT_SUCCESS,
    payload: response,
  };
};

export const getCommentFailure = error => {
  return {
    type: types.GET_COMMENT_FAILURE,
    payload: error,
  };
};

export const addComment = (commentData, userToken) => {
  return {
    type: types.ADD_COMMENT,
    commentData,
    userToken,
  };
};

export const addCommentSuccess = response => {
  const commentLists = store.getState().comment.data;
  return {
    type: types.ADD_COMMENT_SUCCESS,
    payload: [...commentLists, response],
  };
};

export const addCommentFailure = error => {
  return {
    type: types.ADD_COMMENT_FAILURE,
    payload: error,
  };
};

export const getCommentDetail = Id => {
  return {
    type: types.GET_COMMENT,
    Id,
  };
};

export const getCommentDetailSuccess = response => {
  return {
    type: types.GET_COMMENT_DETAIL_SUCCESS,
    payload: response,
  };
};

export const updateComment = (Id, updateCommentData, Token) => {
  return {
    type: types.UPDATE_COMMENT,
    Id,
    updateCommentData,
    Token,
  };
};

export function updateCommentSuccess(Id, updateCommentData) {
  const commentLists = store.getState().comment.data;

  const index = commentLists.findIndex(function(comment) {
    return comment.Id === Id;
  });
  commentLists[index].Content = updateCommentData.Content;
  commentLists[index].StarRating = updateCommentData.StarRating;

  return {
    type: types.UPDATE_TASK_SUCCESS,
    payload: [...commentLists],
  };
}

export const getOutstandingReviews = () => {
  return {
    type: types.GET_OUSTANDING_REVIEWS,
  };
};

export const getOutstandingReviewsSuccess = response => {
  return {
    type: types.GET_OUSTANDING_REVIEWS_SUCCESS,
    payload: response,
  };
};

export const getOutstandingReviewsFailure = error => {
  return {
    type: types.GET_OUSTANDING_REVIEWS_FAILURE,
    payload: error,
  };
};
