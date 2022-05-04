import { combineReducers } from 'redux';
import { books, booksHasErrored, booksIsLoading } from './reducers';

const rootReducer = combineReducers({
  books,
  booksHasErrored,
  booksIsLoading,
});

export default rootReducer;
