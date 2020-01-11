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
