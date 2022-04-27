import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Buttons/Button';
import { connect } from 'react-redux';
import { toggleFavorite, removeBook } from '../../store/booksActions';
import styles from './card.module.scss';

export class BookCardInList extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.index = props.index;
    this.title = props.title;
    this.onClick = this.onClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.favorite = this.props.favorite;
    this.state = {
      modalOpen: this.props.modalOpen,
    };
  }

  onClick = () => {
    this.props.toggleFavorite(this.id);
    console.log(this.id);
    console.log(this.props.booksShelf.find((item) => item.id === this.id));
  };

  openModal = (e) => {
    this.props.showModal();
  };

  render() {
    const { id, favorite, index, title, onClick, openModal } = this.state;
    return (
      <>
        <li className={styles.card__item} key={id} data-id={id}>
          <span
            className={favorite ? styles.favorite : styles.unfavorite}
          ></span>
          <span className={styles.number}>{index}.</span>
          <span className={styles.title}>{title}</span>
          <div className={styles.buttons__box}>
            <Button
              text='F'
              color='green'
              size='small'
              type='button'
              onClick={onClick}
            />
            <Button
              text='D'
              color='red'
              size='small'
              type='button'
              onClick={openModal}
            />
            <Link to={`info/${id}`}>
              <Button
                text='I'
                color='blue'
                size='small'
                type='button'
                onClick={onClick}
              />
            </Link>
          </div>
        </li>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, { toggleFavorite, removeBook })(
  BookCardInList
);
