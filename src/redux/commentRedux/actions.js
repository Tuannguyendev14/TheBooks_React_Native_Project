import * as types from '../constants/actionTypes';

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
  return {
    type: types.ADD_COMMENT_SUCCESS,
    payload: response,
  };
};

export const addCommentFailure = error => {
  return {
    type: types.ADD_COMMENT_FAILURE,
    payload: error,
  };
};
