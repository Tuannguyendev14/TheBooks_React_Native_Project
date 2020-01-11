import * as types from '../constants/actionTypes';

export const getRelatedBooks = idBook => {
  return {
    type: types.GET_RELATED_BOOK,
    idBook,
  };
};

export const getRelatedBooksSuccess = response => {
  return {
    type: types.GET_RELATED_BOOK_SUCCESS,
    payload: response,
  };
};
