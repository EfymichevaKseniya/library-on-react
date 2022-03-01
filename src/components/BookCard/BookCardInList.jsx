import React from 'react';
import Button from '../Buttons/Button';
import { connect } from 'react-redux';
import { toggleFavorite, removeBook } from '../../store/booksActions';
import styles from './card.module.scss';
import { Link } from 'react-router-dom';


export class BookCardInList extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.index = props.index;
    this.title = props.title;
    this.onClick = this.onClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.favorite = this.props.favorite;
  }

  state = {
    modalOpen: this.props.modalOpen,
  }

  onClick = () => {
    this.props.toggleFavorite(this.id);
    console.log(this.id);
    console.log(this.props.booksShelf.find(item => item.id === this.id));
  }

  openModal = (e) => {
    this.props.showModal();
  }

  render() {
    return (
      <>
        <li className={styles.card__item} key={this.id} data-id={this.id}>
          <span className={this.favorite ? styles.favorite : styles.unfavorite}></span>
          <span className={styles.number}>{this.index}.</span>
          <span className={styles.title}>{this.title}</span>
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
            <Link to={`info/${this.id}`}>
              <Button
                text='I'
                color='blue'
                size='small'
                type='button'
                onClick={this.onClick}
              />
            </Link>
          </div>
        </li>
      </>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});


export default connect(mapStateToProps, {toggleFavorite, removeBook})(BookCardInList);
