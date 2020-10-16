import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  movies: searchReducer,
  error: errorReducer
});
export default rootReducer;
