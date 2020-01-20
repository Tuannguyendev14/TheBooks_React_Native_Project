import {
  GET_NOTIFICATION,
  GET_NOTIFICATION_FAILURE,
  GET_NOTIFICATION_SUCCESS,
} from '../constants/actionTypes';
const initState = {
  data: {},
  error: {},
  loading: false,
};
const notificationReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_NOTIFICATION:
      return {
        ...state,
        loading: true,
      };
    case GET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case GET_NOTIFICATION_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default notificationReducer;
