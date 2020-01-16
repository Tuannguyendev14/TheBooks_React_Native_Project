import * as types from '../constants/actionTypes';

const initState = {
  data: {},
  detailBook: {},
  error: {},
  loading: false,
};
const bookReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_BOOK:
      return {
        ...state,
        loading: true,
      };
    case types.GET_BOOK_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case types.GET_BOOK_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case types.GET_BOOK_DETAIL:
      return {...state, loading: true};

    case types.GET_BOOK_DETAIL_SUCCESS:
      return {...state, detailBook: action.payload, loading: false};

    default:
      return state;
  }
};

export default bookReducer;
