import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './page.module.css';

// const url = window.location.pathname;

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.url = window.location.pathname;
  }

  isUserPage = () =>
    this.url.toLocaleLowerCase().includes('login') ||
    this.url.toLocaleLowerCase().includes('signup');

  render() {
    const { children } = this.props;
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          {this.isUserPage() ? null : <Header />}
          <main className={styles.main}>{children}</main>
          {this.isUserPage() ? null : <Footer />}
        </div>
      </div>
    );
  }
}

export default Page;
