import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Home } from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import SignUp from './components/pages/SignUp/SignUp';
import AddBook from './components/pages/AddBook/AddBook';
import { InfoBook } from './components/pages/InfoBook/InfoBook';
import { FavoriteBooks } from './components/pages/FavoriteBooks/FavoriteBooks';
import allReducers from './store/booksReducer';

export const store = createStore(allReducers, composeWithDevTools());

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/signup' element={<SignUp />} />
              <Route exact path='/add' element={<AddBook />} />
              <Route path='/info/:id' element={<InfoBook />} />
              <Route exact path='/favorite' element={<FavoriteBooks />} />
            </Routes>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
