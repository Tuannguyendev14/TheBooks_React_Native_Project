import * as types from '../constants/actionTypes';
export const addCard = (data, token) => {
  return {
    type: types.ADD_CARD,
    data: data,
    token: token,
  };
};

export const addCardSuccess = response => {
  return {
    type: types.ADD_CARD_SUCCESS,
    payload: response,
  };
};

export const addCardFailure = error => {
  return {
    type: types.ADD_CARD_FAILURE,
    payload: error,
  };
};
export const getCard = (data, token) => {
  return {
    type: types.GET_CARD,
    data: data,
    token: token,
  };
};

export const getCardSuccess = response => {
  return {
    type: types.GET_CARD_SUCCESS,
    payload: response,
  };
};

export const getCardFailure = error => {
  return {
    type: types.GET_CARD_FAILURE,
    payload: error,
  };
};

export const deleteCard = (data, token) => {
  return {
    type: types.DELETE_CARD,
    data: data,
    token: token,
  };
};

export const deleteCardSuccess = response => {
  return {
    type: types.DELETE_CARD_SUCCESS,
    payload: response,
  };
};

export const deleteCardFailure = error => {
  return {
    type: types.DELETE_CARD_FAILURE,
    payload: error,
  };
};
