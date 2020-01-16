import * as types from '../constants/actionTypes';

export const getBook = () => {
  return {
    type: types.GET_BOOK,
    //payload: data,
  };
};

export const getBookSuccess = response => {
  // console.log('response', response);
  return {
    type: types.GET_BOOK_SUCCESS,
    payload: response,
  };
};

export const getBookFailure = error => {
  return {
    type: types.GET_BOOK_FAILURE,
    payload: error,
  };
};

export const getBookDetail = idBook => {
  return {
    type: types.GET_BOOK_DETAIL,
    idBook,
  };
};

export const getBookDetailSuccess = response => {
  // console.log('response', response);
  return {
    type: types.GET_BOOK_DETAIL_SUCCESS,
    payload: response,
  };
};
