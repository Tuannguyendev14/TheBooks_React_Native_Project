import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import {logger} from 'redux-logger';
//import combineReducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, {}, applyMiddleware(sagaMiddleware, logger));

//console.log('logg-aa', store.getState());
sagaMiddleware.run(rootSaga);
export default store;
