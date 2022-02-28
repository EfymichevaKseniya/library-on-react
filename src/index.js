import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import allReducers from "./store/booksReducer";

const store = createStore(allReducers, composeWithDevTools());
// const store = createStore(reducers, applyMiddleware);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
