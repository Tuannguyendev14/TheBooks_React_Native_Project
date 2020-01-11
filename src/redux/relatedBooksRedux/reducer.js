import {
  GET_RELATED_BOOK,
  GET_RELATED_BOOK_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  data: {},
  error: {},
  loading: false,
};

const relatedBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RELATED_BOOK:
      return {...state, loading: true};

    case GET_RELATED_BOOK_SUCCESS:
      return {...state, data: action.payload, loading: false};

    default:
      return state;
  }
};
export default relatedBookReducer;
