import { ADD_CARD, ADD_CARD_SUCCESS, ADD_CARD_FAILURE, GET_CARD, GET_CARD_SUCCESS, GET_CARD_FAILURE } from '../constants/actionTypes';
const initState = {
    data: {},
    error: {},
    loading: false,
};
const cardReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return {
                ...state,
                loading: true,
            };
        case ADD_CARD_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        case ADD_CARD_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case GET_CARD:
            return {
                ...state,
                data: action.payload,
                loading: true,
            };
        case GET_CARD_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        case GET_CARD_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default cardReducer;
