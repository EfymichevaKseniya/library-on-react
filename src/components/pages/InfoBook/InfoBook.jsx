import React from 'react';
import { connect } from 'react-redux';
import Page from '../../Page/Page';
import { store } from '../../../App';
import styles from './info.module.scss';

export class InfoBook extends React.Component {
  render() {
    const id = window.location.pathname.split('/')[2];
    const book = store.getState().booksShelf.find(item => item.id === id);
    console.log(id);
    console.log(book);
    return (
      <Page>
        <div className={styles.book}>
          <h2 className={styles.title}>{book.title}</h2>
            <label className={styles.label}>{book.authors}</label>
          <p className={styles.text}>{book.description}</p>
        </div> 
        
      </Page>
    )
  }
}


export default connect()(InfoBook);
