export const GET_BOOK = 'GET_BOOK';
export const GET_BOOK_SUCCESS = 'GET_BOOK_SUCCESS';
export const GET_BOOK_FAILURE = 'GET_BOOK_FAILURE';

export const getBook = () => {
  return {
    type: GET_BOOK,
    //payload: data,
  };
};

export const getBookSuccess = response => {
  return {
    type: GET_BOOK_SUCCESS,
    payload: response,
  };
};

export const getBookFailure = error => {
  return {
    type: GET_BOOK_FAILURE,
    payload: error,
  };
};
