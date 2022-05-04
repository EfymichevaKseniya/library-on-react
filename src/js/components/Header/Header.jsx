import React from 'react';
import InputSearch from '../Input/Input';
import styles from './header.module.scss';

class Header extends React.Component {
  headerContent = () => {
    return window.location.pathname.includes('add') ? (
      <InputSearch />
    ) : (
      <h1 className={styles.title}>
        Library{`${window.location.pathname.slice(1, 1)}`}
      </h1>
    );
  };

  render() {
    return <header className={styles.header}>{this.headerContent()}</header>;
  }
}

export default Header;
