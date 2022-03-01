import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import BookListWrapperForMyBooks from '../../BookListWrapper/BookListWrapperForMyBooks';
import Page from '../../Page/Page';
import { store } from '../../../App';

const auth = localStorage.getItem('token');

export class Home extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    if (auth === '' || auth === undefined) {
      return <Navigate to='/login' replace={true} />
    }
    console.log(this.props);
    const books = store.getState().booksShelf;
    return (
      <Page>
        <BookListWrapperForMyBooks books={books} />
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps, null)(Home);
