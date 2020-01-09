import {combineReducers} from 'redux';
import userReducer from './userRedux/reducer';
import bookReducer from './bookRedux/reducer';

const myReducer = combineReducers({
  bookReducer,
  user: userReducer,
});

export default myReducer;

