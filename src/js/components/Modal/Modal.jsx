import React from 'react';
import { connect } from 'react-redux';
import Button from '../Buttons/Button';
import CloseBtn from '../../../img/close.svg';
import styles from './modal.module.scss';
import BooksContext from '../../../utils/BooksContext';
import { token, BASEURL } from '../../redux/actions';

// const url = 'https://internsapi.public.osora.ru/api/book/add';

export class Modal extends React.Component {
  // eslint-disable-next-line react/static-property-placement
  static contextType = BooksContext;

  constructor(props) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onClickButton = async (e) => {
    e.preventDefault();
    const { books } = this.context;
    const book = books.find((item) => item.id === this.props.id);
    const objBookOnServer = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      favorite: 0,
      uid: book.id,
    };
    const params = Object.entries(objBookOnServer)
      .map((item) => item.join('='))
      .join('&');

    await fetch(`${BASEURL}/book/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Authorization: `Bearer ${token}`,
      },
      body: params,
    })
      .then((res) => res.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
    this.props.showModal(false);
  };

  onCloseModal = () => {
    this.props.showModal(false);
  };

  render() {
    const { modalOpen, title, content } = this.props;
    if (!modalOpen) {
      return null;
    }
    return (
      <div className={styles.modal} onClick={this.onCloseModal}>
        <div
          className={styles.modal__dialog}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.modal__header}>
            <h3 className={styles.modal__title}>{title} book</h3>
            <img
              className={styles.modal__close}
              src={CloseBtn}
              alt='close button'
              onClick={this.onCloseModal}
            />
          </div>
          <div className={styles.modal__body}>
            <div className={styles.modal__content}>
              Are you sure you want to {content} this book?
            </div>
          </div>
          <div className={styles.modal__footer}>
            <Button
              text='yes'
              color='blue'
              size='normal'
              type='button'
              onClick={this.onClickButton}
            />
            <Button
              text='no'
              color='red'
              size='normal'
              type='button'
              onClick={this.onCloseModal}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null)(Modal);
