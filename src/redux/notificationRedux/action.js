import * as types from '../constants/actionTypes';
export const getNotification = (data, token) => {
  return {
    type: types.GET_NOTIFICATION,
    data: data,
    token: token,
  };
};

export const getNotificationSuccess = response => {
  return {
    type: types.GET_NOTIFICATION_SUCCESS,
    payload: response,
  };
};

export const getNotificationFailure = error => {
  return {
    type: types.GET_NOTIFICATION_FAILURE,
    payload: error,
  };
};
