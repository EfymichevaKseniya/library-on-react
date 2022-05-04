import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import Button from '../Buttons/Button';
import styles from './card.module.scss';
import request from '../../../utils/request';
import { BASEURL } from '../../redux/actions';

const url = window.location.pathname;

export class BookCardInList extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.setState = this.setState.bind(this);
    // eslint-disable-next-line react/destructuring-assignment
    this.state = { loading: false, favorite: this.props.favorite };
  }

  onClick = (e) => {
    const id = e.target.closest('li').getAttribute('data-id');
    const { favorite } = this.state;
    request(
      `${BASEURL}/book/update/${id}?favorite=${favorite ? 0 : 1}`,
      'POST',
      this.setState
    );
    this.setState((prevState) => ({favorite: prevState.favorite ? 0 : 1}));
    if (url.includes('favorite')) {
      this.props.reRender(true) 
    }
  
  };

  openModal = (e) => {
    const { showModal, deleteBook } = this.props;
    const id = e.target.closest('li').getAttribute('data-id');
    deleteBook(id);
    showModal();
  };

  render() {
    const { id, index, title } = this.props;
    const { loading, favorite} = this.state;
    return (
      <li className={styles.card__item} key={id} data-id={id}>
        {loading ? (
          <Circles height='20' width='20' />
        ) : (
          <>
            <span className={favorite ? styles.favorite : styles.unfavorite} />
            <span className={styles.number}>{index}.</span>
            <span className={styles.title}>{title}</span>
            <div className={styles.buttons__box}>
              <Button
                text='F'
                color='green'
                size='small'
                type='button'
                onClick={this.onClick}
              />
              <Button
                text='D'
                color='red'
                size='small'
                type='button'
                onClick={this.openModal}
              />
              <Link to={`/info/${id}`} replace>
                <Button text='I' color='blue' size='small' type='button' />
              </Link>
            </div>
          </>
        )}
      </li>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(BookCardInList);
