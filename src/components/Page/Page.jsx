import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './page.module.css';

const url = window.location.pathname;

class Page extends React.Component {
  isUserPage = () => url.toLocaleLowerCase().includes('login') || url.toLocaleLowerCase().includes('signup');

  render() {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          {this.isUserPage() ? null : <Header />}
          <main className={styles.main}>
              {this.props.children}
          </main>
          {this.isUserPage() ? null : <Footer />}
        </div>
      </div>
    )
  }
}

export default Page;
