import {GET_BOOK, GET_BOOK_FAILURE, GET_BOOK_SUCCESS} from './actions';
const initState = {
  data: {},
  error: {},
  loading: false,
};
const bookReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_BOOK:
      return {
        ...state,
        loading: true,
      };
    case GET_BOOK_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case GET_BOOK_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default bookReducer;
