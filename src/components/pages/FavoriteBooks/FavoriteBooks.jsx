/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import store from '../../../store';
import { BookListWrapperForMyBooks } from '../../BookListWrapper/BookListWrapperForMyBooks';
import Page from '../../Page/Page';

// const url = window.location.pathname.split(':').slice(1, 1);

export class FavoriteBooks extends React.Component {
  render() {
    const books = store.getState().booksShelf.filter((item) => item.favorite);
    // console.log(books);
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

export default connect(mapStateToProps, null)(FavoriteBooks);
