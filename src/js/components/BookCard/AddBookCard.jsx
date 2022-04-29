import React from 'react';
import Button from '../Buttons/Button';
import styles from './card.module.scss';

class BookCard extends React.Component {
  constructor(props) {
    super(props);
    this.favorite = 0;
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const { addBook, showModal } = this.props;
    addBook(e.target.closest('li').getAttribute('data-id'));
    showModal();
  }

  render() {
    const { id, title, index } = this.props;
    return (
      <li className={styles.card__item} key={id} data-id={id}>
        <span className={this.favorite ? styles.favorite : styles.unfavorite} />
        <span className={styles.number}>{index}.</span>
        <span className={styles.title}>{title}</span>
        <Button
          text='add'
          color='green'
          size='normal'
          type='button'
          onClick={this.onClick}
        />
      </li>
    );
  }
}

export default BookCard;
