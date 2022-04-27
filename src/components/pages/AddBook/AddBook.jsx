import React from 'react';
import BooksContext, {
  BooksContextProvider,
} from '../../../utils/BooksContext';
import BookListWrapper from '../../BookListWrapper/BookListWrapper';
import Page from '../../Page/Page';

export const BookListContext = React.createContext();

class AddBook extends React.Component {
  static contextType = BooksContext;

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
