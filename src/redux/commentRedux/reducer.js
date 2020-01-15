import * as types from '../constants/actionTypes';

const initialState = {
  data: {},
  detailComment: {},
  ounstandingReviews: {},
  error: {},
  loading: false,
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COMMENT:
      return {...state, loading: true};

    case types.GET_COMMENT_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case types.GET_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case types.ADD_COMMENT:
      return {...state, loading: true};

    case types.ADD_COMMENT_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case types.ADD_COMMENT_FAILURE:
      return {...state, error: action.payload, loading: false};

    case types.GET_COMMENT:
      return {...state, loading: true};

    case types.GET_BOOK_DETAIL_SUCCESS:
      return {...state, detailComment: action.payload, loading: false};

    case types.UPDATE_COMMENT:
      return {...state, loading: true};

    case types.UPDATE_COMMENT_SUCCESS:
      return {...state, data: action.payload};

    case types.GET_OUSTANDING_REVIEWS:
      return {
        ...state,
        loading: true,
      };
    case types.GET_OUSTANDING_REVIEWS_SUCCESS:
      return {
        ...state,
        ounstandingReviews: action.payload,
        loading: false,
      };
    case types.GET_OUSTANDING_REVIEWS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default commentReducer;
