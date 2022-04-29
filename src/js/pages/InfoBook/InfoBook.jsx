/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import Page from '../../components/Page/Page';
import store from '../../redux';
import styles from './info.module.scss';

export class InfoBook extends React.Component {
  render() {
    const id = window.location.pathname.split('/')[2];
    const book = store.getState().booksShelf.find((item) => item.id === id);
    // console.log(id);
    // console.log(book);
    return (
      <Page>
        <div className={styles.book}>
          <h2 className={styles.title}>{book.title}</h2>
          <span className={styles.label}>{book.authors}</span>
          <p className={styles.text}>{book.description}</p>
        </div>
      </Page>
    );
  }
}

export default connect()(InfoBook);
