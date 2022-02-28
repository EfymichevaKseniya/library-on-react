import { combineReducers } from 'redux';
import booksReducer from './booksReducer';

// const initialState = {
//   books: []
// };

// function rootReducer(state = initialState, action) {
//   return state;
// };

// export default rootReducer;

const allReducers = combineReducers({
  booksShelf: booksReducer
});

export default allReducers;
