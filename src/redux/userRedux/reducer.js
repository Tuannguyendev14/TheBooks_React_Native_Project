import {
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  LOG_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGOUT_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  data: {},
  error: {},
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {...state, loading: true};

    case ADD_USER_SUCCESS:
      console.log('ok');
      return {...state, data: action.payload, loading: false};

    case ADD_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case LOG_IN:
      return {...state, loading: true};

    case LOGIN_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case LOGIN_FAILURE:
      return {...state, error: action.payload, loading: false};

    case LOGOUT_SUCCESS:
      return {...initialState};

    default:
      return state;
  }
};
export default userReducer;
