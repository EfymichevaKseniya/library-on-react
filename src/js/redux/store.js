import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import rootReducer from './index';

function configureStore(state) {
  return createStore(rootReducer, state, applyMiddleware(thunk));
}
const store = configureStore(initialState);

export default store;
