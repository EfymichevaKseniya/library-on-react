import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import allReducers from './booksReducer';

const store = createStore(allReducers, composeWithDevTools());

export default store;
