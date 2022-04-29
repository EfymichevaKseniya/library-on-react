/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { BookListWrapperForMyBooks } from '../../components/BookListWrapper/BookListWrapperForMyBooks';
import Page from '../../components/Page/Page';
import { token, booksFetchData } from '../../redux/actions';

export class Home extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchData();
  }

  render() {
    if (token === '' || token === undefined) {
      return <Navigate to='/login' replace />;
    }
    // const books = store.getState().booksShelf;
    const { books, hasErrored, isLoading } = this.props;
    console.log(books);

    if (hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <Page>
        <BookListWrapperForMyBooks books={books} />
      </Page>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    hasErrored: state.booksHasErrored,
    isLoading: state.booksIsLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(booksFetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
