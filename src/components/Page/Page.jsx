import React from 'react';
import styles from './page.module.css';

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          {this.props.children}
        </div>
      </main>
    )
  }
}

export default Page;
