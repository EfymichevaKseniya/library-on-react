import { combineReducers } from 'redux';
import booksReducer from './booksReducer';

const allReducers = combineReducers({
  booksShelf: booksReducer,
});

export default allReducers;
