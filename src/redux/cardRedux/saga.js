import { call, put, takeLatest } from 'redux-saga/effects';
import { addCardSuccess, addCardFailure, addCard } from './action';
import { onChangeIntoMainScreen } from '../../navigation';
import { addToCard, getCard } from '../../api/card';
import { ADD_CARD } from '../constants/actionTypes';
export function* addCardSaga({ data }) {
    try {
        console.log('data:', data);
        AsyncStorage.getItem('user');
        let parsed = JSON.parse(user);
        const response = yield call(addToCard, data, parsed.Token.access_token);
        console.log('call add to cARD');
        const data1 = response.data;
        yield put(addCardSuccess(data1));
        // onChangeIntoMainScreen(response.data);
        console.log('card ', response);
    } catch (error) {
        console.log(error);
        yield put(addCardFailure(error));
    }
}
export function* getCardSaga(idcard) {
    try {
        const response = yield call(getCard);
        const data = response.data;
        yield put(getCardSuccess(data));
        // onChangeIntoMainScreen(response.data);
        console.log('card ', response);
    } catch (error) {
        yield put(getCardFailure(error));
    }
}
const cardSaga = () => [
    takeLatest(ADD_CARD, addCardSaga),
    takeLatest('GET_CARD', getCardSaga),
];
export default cardSaga();
