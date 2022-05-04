/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import { Circles } from 'react-loader-spinner';
import Page from '../../components/Page/Page';
import styles from './info.module.scss';
import request from '../../../utils/request';
import { BASEURL } from '../../redux/actions';

export class InfoBook extends React.Component {
  isComponentMounted = false;

  constructor(props) {
    super(props);
    this.state = { book: {}, loading: false };
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    this.isComponentMounted = true;
    this.setData();
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  setData = async () => {
    const result = await request(`${BASEURL}/book/list`, 'GET', this.setState);
    const id = window.location.pathname.split('/')[2];
    const findBook = result.find((item) => item.id === +id);
    if (this.isComponentMounted) {
      this.setState({ book: findBook });
    }
  };

  render() {
    const { book, loading } = this.state;
    return (
      <Page>
        {loading ? (
          <Circles height='50' width='50' />
        ) : (
          <div className={styles.book}>
            <h2 className={styles.title}>{book.title}</h2>
            <span className={styles.label}>{book.authors}</span>
            <p className={styles.text}>{book.description}</p>
          </div>
        )}
      </Page>
    );
  }
}

export default connect()(InfoBook);
