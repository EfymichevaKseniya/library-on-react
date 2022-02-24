import React from "react";
import Button from "../Buttons/Button";
import CloseBtn from '../../img/close.svg';
import styles from './modal.module.scss';
import BooksContext from "../../utils/BooksContext";

const url = 'https://internsapi.public.osora.ru/api/book/add';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.id;
    this.title = props.title;
    this.content = props.content;
    this.onClickButton = this.onClickButton.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  static contextType = BooksContext;

  state={
    modalOpen: this.props.modalOpen
  }

  onClickButton = async (e) => {
      e.preventDefault();
      const { books } = this.context;
      const accessToken = localStorage.getItem('token');
      let book = books.find((item) => item.id === this.props.id);
      console.log(this.id);
      let objBookOnServer = {
        'uid': book.id,
        'title': book.volumeInfo.title,
        'description': book.volumeInfo.description,
        'authors':  book.volumeInfo.authors,
        'favorite': 0,
      }
      let response = await fetch(url, {
        method: 'POST',
        access_token: `${accessToken}`,
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(objBookOnServer)
      });
      console.log(response.status);
      this.props.showModal(false);
  }

  onCloseModal = () => {
    this.props.showModal(false);
  }

  render() {
      if (!this.props.modalOpen) {
        return null;
      } 
      return (
        <div className={styles.modal} onClick={this.onCloseModal}>
          <div className={styles.modal__dialog} onClick={e => e.stopPropagation()}>
              <div className={styles.modal__header}>
                  <h3 className={styles.modal__title}>{this.title} book</h3>
                  <img className={styles.modal__close} src={CloseBtn} alt='close button' onClick={this.onCloseModal} />
              </div>
              <div className={styles.modal__body}>
                  <div className={styles.modal__content}>Are you sure you want to {this.content} this book?</div>
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
      )
  }  
}

export default Modal;
