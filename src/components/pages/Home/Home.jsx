import React from 'react';
import { Navigate } from 'react-router-dom';

import BookListWrapperForMyBooks from '../../BookListWrapper/BookListWrapperForMyBooks';
import Page from '../../Page/Page';

const auth = localStorage.getItem('token');

export class Home extends React.Component {
  

  render() {
    if (auth === '' || auth === undefined) {
      return <Navigate to='/login' replace={true} />
    }
    return (
      <Page>
        <BookListWrapperForMyBooks />
      </Page>
    )
  }
}
