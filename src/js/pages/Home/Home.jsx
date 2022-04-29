/* eslint-disable class-methods-use-this */
import React from 'react';
import { Navigate } from 'react-router-dom';
import request from '../../../utils/request';
import { BookListWrapperForMyBooks } from '../../components/BookListWrapper/BookListWrapperForMyBooks';
import Page from '../../components/Page/Page';
import { token, BASEURL } from '../../redux/actions';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    this.setData();
  }

  setData = async () => {
    const result = await request(`${BASEURL}/list`);
    this.setState({ books: result });
  };

  render() {
    if (token === '' || token === undefined) {
      return <Navigate to='/login' replace />;
    }
    const { books } = this.state;

    return (
      <Page>
        <BookListWrapperForMyBooks books={books} />
      </Page>
    );
  }
}

export default Home;
