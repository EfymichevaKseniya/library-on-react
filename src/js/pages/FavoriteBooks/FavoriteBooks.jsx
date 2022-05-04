/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import { Circles } from 'react-loader-spinner';
import { BookListWrapperForMyBooks } from '../../components/BookListWrapper/BookListWrapperForMyBooks';
import Page from '../../components/Page/Page';
import request from '../../../utils/request';
import { BASEURL } from '../../redux/actions';

export class FavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [], loading: false };
    this.setState = this.setState.bind(this);
    this.reRenderParent = this.reRenderParent.bind(this);
  }

  componentDidMount() {
    this.setData();
    this.reRenderParent();
  }

  setData = async () => {
    const result = await request(`${BASEURL}/book/list`, 'GET', this.setState);
    const findBooks = result.filter((item) => item.favorite === 1);
    this.setState({ books: findBooks });
  };

  reRenderParent() {
    this.setData();
  }

  render() {
    const { books, loading } = this.state;
    return (
      <Page>
        {loading ? (
          <Circles height='50' width='50' />
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

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, null)(FavoriteBooks);
