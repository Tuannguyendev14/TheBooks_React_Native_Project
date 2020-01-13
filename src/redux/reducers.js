import { combineReducers } from 'redux';
import userReducer from './userRedux/reducer';
import bookReducer from './bookRedux/reducer';
import commentReducer from './commentRedux/reducer';
import relatedBookReducer from './relatedBooksRedux/reducer';
import CardReducer from './cardRedux/reducer';

const myReducer = combineReducers({
  bookReducer,
  user: userReducer,
  comment: commentReducer,
  relatedBook: relatedBookReducer,
  CardReducer,
});

export default myReducer;
