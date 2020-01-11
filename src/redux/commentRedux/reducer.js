import {
  GET_COMMENT,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAILURE,
} from '../constants/actionTypes';

const initialState = {
  data: {},
  error: {},
  loading: false,
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT:
      return {...state, loading: true};

    case GET_COMMENT_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case GET_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    // case LOG_IN:
    //   return {...state, loading: true};

    // case LOGIN_SUCCESS:
    //   return {...state, data: action.payload, loading: false};

    // case LOGIN_FAILURE:
    //   return {...state, error: action.payload, loading: false};

    // case LOGOUT_SUCCESS:
    //   return {...initialState};

    default:
      return state;
  }
};
export default commentReducer;
