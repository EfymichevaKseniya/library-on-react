import React from 'react';
import { connect } from 'react-redux';
import Page from '../../Page/Page';

const url = window.location.pathname.slice(1,1);

export class InfoBook extends React.Component {
  render() {
    // const book = this.props.booksShelf;
    console.log(this.state);
    return (
      <Page>
        {/* <h2>{this.book.title}</h2>
        <label>{this.book.authors}</label>
        <p>{this.book.description}</p> */}
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps, null)(InfoBook);
