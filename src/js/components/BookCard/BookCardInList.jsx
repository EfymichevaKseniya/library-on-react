import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Buttons/Button';
import styles from './card.module.scss';
import request from '../../../utils/request';
import { BASEURL } from '../../redux/actions';

export class BookCardInList extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  onClick = (e) => {
    e.preventDefault();
    const id = e.target.closest('li').getAttribute('data-id');
    request(
      `${BASEURL}/update/${id}?favorite=${this.props.favorite ? 0 : 1}`,
      'POST'
    );
  };

  openModal = (e) => {
    const { showModal, deleteBook } = this.props;
    const id = e.target.closest('li').getAttribute('data-id');
    deleteBook(id);
    showModal();
  };

  render() {
    const { id, favorite, index, title } = this.props;
    return (
      <li className={styles.card__item} key={id} data-id={id}>
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
          <Link to={`info/${id}`}>
            <Button text='I' color='blue' size='small' type='button' />
          </Link>
        </div>
      </li>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(BookCardInList);
