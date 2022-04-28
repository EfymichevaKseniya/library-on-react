/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { BookListWrapperForMyBooks } from '../../BookListWrapper/BookListWrapperForMyBooks';
import Page from '../../Page/Page';
import store from '../../../store';

const auth = localStorage.getItem('token');

export class Home extends React.Component {
  render() {
    if (auth === '' || auth === undefined) {
      return <Navigate to='/login' replace />;
    }
    // console.log(this.props);
    const books = store.getState().booksShelf;
    return (
      <Page>
        <BookListWrapperForMyBooks books={books} />
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, null)(Home);
