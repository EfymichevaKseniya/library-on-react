/* eslint-disable class-methods-use-this */
import React from 'react';
import { Circles } from 'react-loader-spinner';
// import { Navigate } from 'react-router-dom';
import request from '../../../utils/request';
import { BookListWrapperForMyBooks } from '../../components/BookListWrapper/BookListWrapperForMyBooks';
import Page from '../../components/Page/Page';
import { BASEURL } from '../../redux/actions';

export class Home extends React.Component {
  isComponentMounted = false;

  constructor(props) {
    super(props);
    this.state = { books: [], loading: false };
    this.reRenderParent = this.reRenderParent.bind(this);
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    this.isComponentMounted = true;
    this.setData();
    this.reRenderParent();
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  setData = async () => {
    const result = await request(`${BASEURL}/book/list`, 'GET', this.setState);
    if (this.isComponentMounted) {
      this.setState({ books: result });
    }
  };

  reRenderParent() {
    this.setData();
  }

  render() {
    // if (token === '' || token === undefined) {
    //   return <Navigate to='/login' replace />;
    // }
    const { books, loading } = this.state;

    return (
      <Page>
        {loading ? (
          <Circles height='50' width='50'/>
        ) : (
          <BookListWrapperForMyBooks
            books={books}
            reRenderParent={this.reRenderParent}
          />
        )}
      </Page>
    );
  }
}

export default Home;
