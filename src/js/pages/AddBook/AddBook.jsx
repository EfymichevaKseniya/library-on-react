/* eslint-disable class-methods-use-this */
import React from 'react';
import { BooksContextProvider } from '../../../utils/BooksContext';
import BookListWrapper from '../../components/BookListWrapper/BookListWrapper';
import Page from '../../components/Page/Page';

export const BookListContext = React.createContext();

class AddBook extends React.Component {
  // static contextType = BooksContext;

  render() {
    return (
      <BooksContextProvider>
        <Page>
          <BookListWrapper />
        </Page>
      </BooksContextProvider>
    );
  }
}

export default AddBook;
