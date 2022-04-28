import React from 'react';
import { connect } from 'react-redux';
import Button from '../Buttons/Button';
import CloseBtn from '../../img/close.svg';
import styles from './modal.module.scss';
import BooksContext from '../../utils/BooksContext';
import { removeBook } from '../../store/booksActions';

export class ModalDeleteBook extends React.Component {
  // eslint-disable-next-line react/static-property-placement
  static contextType = BooksContext;

  constructor(props) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onClickButton = (e) => {
    e.preventDefault();
    this.props.removeBook(this.id);
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

export default connect(null, { removeBook })(ModalDeleteBook);
