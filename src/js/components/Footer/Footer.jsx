/* eslint-disable class-methods-use-this */
import React from 'react';
import { Link } from 'react-router-dom';
import AddBook from '../../../img/add-book.svg';
import AllBook from '../../../img/all-book.svg';
import Favorite from '../../../img/favorite-book.svg';
import styles from './footer.module.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <nav className={styles.nav}>
          <ol className={styles.nav__list}>
            <li>
              <Link to='/'>
                <img src={AllBook} alt='all book sign' />
              </Link>
            </li>
            <li>
              <Link to='/add'>
                <img src={AddBook} alt='add book sign' />
              </Link>
            </li>
            <li>
              <Link to='/favorite'>
                <img src={Favorite} alt='favorite sign' />
              </Link>
            </li>
          </ol>
        </nav>
      </footer>
    );
  }
}

export default Footer;
