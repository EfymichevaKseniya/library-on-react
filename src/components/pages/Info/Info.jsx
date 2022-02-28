import { connect } from 'formik';
import React from 'react';
import Page from '../../Page/Page';

const url = window.location.pathname.slice(1,1);

export class Info extends React.Component {
  constructor(props) {
    super(props);
    this.book = this.props.booksShelf;
  }

  

  render() {
    console.log(this.props.booksShelf);
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

export default connect(mapStateToProps, null)(Info);
