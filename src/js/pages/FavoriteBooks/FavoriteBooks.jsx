/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import { BookListWrapperForMyBooks } from '../../components/BookListWrapper/BookListWrapperForMyBooks';
import Page from '../../components/Page/Page';
import request from '../../../utils/request';
import { BASEURL } from '../../redux/actions';

export class FavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    this.setData();
  }

  setData = async () => {
    const result = await request(`${BASEURL}/list`);
    const findBooks = result.filter((item) => item.favorite === 1);
    this.setState({ books: findBooks });
  };

  render() {
    const { books } = this.state;
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
