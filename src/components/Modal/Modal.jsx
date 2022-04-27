import React from 'react';
import Button from '../Buttons/Button';
import CloseBtn from '../../img/close.svg';
import styles from './modal.module.scss';
import { connect } from 'react-redux';
import BooksContext from '../../utils/BooksContext';
import { addBook } from '../../store/booksActions';

const url = 'https://internsapi.public.osora.ru/api/book/add';

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.id;
    this.title = props.title;
    this.content = props.content;
    this.onClickButton = this.onClickButton.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  static contextType = BooksContext;

  state = {
    modalOpen: this.props.modalOpen,
  };

  onClickButton = (e) => {
    e.preventDefault();
    const { books } = this.context;
    let book = books.find((item) => item.id === this.props.id);
    let objBookOnServer = {
      id: book.id,
      title: book.volumeInfo.title,
      description: book.volumeInfo.description,
      authors: book.volumeInfo.authors,
      favorite: 0,
    };
    this.props.addBook(objBookOnServer);
    // let response = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${accessToken}`,
    //   },
    //   body: JSON.stringify(objBookOnServer)
    // });
    // console.log(JSON.stringify(objBookOnServer));
    // console.log(await response.json());
    this.props.showModal(false);
  };

  onCloseModal = () => {
    this.props.showModal(false);
  };

  render() {
    if (!this.props.modalOpen) {
      return null;
    }
    return (
      <div className={styles.modal} onClick={this.onCloseModal}>
        <div
          className={styles.modal__dialog}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.modal__header}>
            <h3 className={styles.modal__title}>{this.title} book</h3>
            <img
              className={styles.modal__close}
              src={CloseBtn}
              alt='close button'
              onClick={this.onCloseModal}
            />
          </div>
          <div className={styles.modal__body}>
            <div className={styles.modal__content}>
              Are you sure you want to {this.content} this book?
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

export default connect(null, { addBook })(Modal);
