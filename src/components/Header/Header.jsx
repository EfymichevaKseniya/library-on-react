import React from 'react';
import InputSearch from '../Input/Input';
import styles from './header.module.scss';

const url = window.location.pathname;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={styles.header}>
        {url.includes('add') ? <InputSearch /> : <h1 className={styles.title}>Library{-url.slice(0, 1)}</h1>}
      </header>
    )
  }
}

export default Header;