/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import Page from '../../components/Page/Page';
import styles from './info.module.scss';
import request from '../../../utils/request';
import { BASEURL } from '../../redux/actions';

export class InfoBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { book: {} };
  }

  componentDidMount() {
    this.setData();
  }

  setData = async () => {
    const result = await request(`${BASEURL}/list`);
    const id = window.location.pathname.split('/')[2];
    const findBook = result.find((item) => item.id === +id);
    this.setState({ book: findBook });
  };

  render() {
    const { book } = this.state;
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
