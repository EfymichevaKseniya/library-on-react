/* eslint-disable class-methods-use-this */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
// eslint-disable-next-line import/no-cycle
import Login from './js/pages/Login/Login';
import SignUp from './js/pages/SignUp/SignUp';
import AddBook from './js/pages/AddBook/AddBook';
import { InfoBook } from './js/pages/InfoBook/InfoBook';
import { FavoriteBooks } from './js/pages/FavoriteBooks/FavoriteBooks';
import { Home } from './js/pages/Home/Home';
import './styles/App.scss';
import store from './js/redux/store';

export const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Provider store={store}>
          <Router history={history}>
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
