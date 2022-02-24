import React from 'react';
import Button from '../Buttons/Button';
import styles from './card.module.scss';


class BookCardInList extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.index = props.index;
    this.title = props.title;
    this.favorite = 0;
    this.deleteBook = this.deleteBook.bind(this);
    this.addToFavorite = this.addToFavorite.bind(this);
    this.infoBook = this.infoBook.bind(this);
  }

  state = {
    modalOpen: this.props.modalOpen,
  }

  deleteBook(e) {
    this.props.showModal();
  }

  addToFavorite() {
  }

  infoBook() {
  }

  render() {
    return (
      <>
        <li className={styles.card__item} key={this.id} data-id={this.id}>
          <span className={this.favorite ? styles.favorite : styles.unfavorite}></span>
          <span className={styles.number}>{this.index}.</span>
          <span className={styles.title}>{this.title}</span>
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
            onClick={this.onClick}
          />
          <Button
            text='I'
            color='blue'
            size='small'
            type='button'
            onClick={this.onClick}
          />
        </li>
      </>
    )
  }
}

export default BookCardInList;
