import React from 'react';
import Button from '../Buttons/Button';
import styles from './card.module.scss';

class BookCard extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.index = props.index;
    this.title = props.title;
    this.favorite = 0;
    this.onClick = this.onClick.bind(this);
    // this.state = {
    //   modalOpen: this.props.modalOpen,
    // };
  }

  onClick(e) {
    this.props.addBook(e.target.closest('li').getAttribute('data-id'));
    this.props.showModal();
  }

  render() {
    return (
      <>
        <li className={styles.card__item} key={this.id} data-id={this.id}>
          <span
            className={this.favorite ? styles.favorite : styles.unfavorite}
          ></span>
          <span className={styles.number}>{this.index}.</span>
          <span className={styles.title}>{this.title}</span>
          <Button
            text='add'
            color='green'
            size='normal'
            type='button'
            onClick={this.onClick}
          />
        </li>
      </>
    );
  }
}

export default BookCard;
