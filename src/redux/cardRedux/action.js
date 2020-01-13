import * as types from '../constants/actionTypes';
export const addCard = data => {
    return {
        type: ADD_CARD,
        payload: data,
    };
};

export const addCardSuccess = response => {
    return {
        type: ADD_CARD_SUCCESS,
        payload: response,
    };
};

export const addCardFailure = error => {
    return {
        type: ADD_CARD_FAILURE,
        payload: error,
    };
};
export const getCard = data => {
    return {
        type: ADD_CARD,
        payload: data,
    };
};

export const getCardSuccess = response => {
    return {
        type: ADD_CARD_SUCCESS,
        payload: response,
    };
};

export const getCardFailure = error => {
    return {
        type: ADD_CARD_FAILURE,
        payload: error,
    };
};
