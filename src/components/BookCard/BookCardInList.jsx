import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Buttons/Button';
import { toggleFavorite, removeBook } from '../../store/booksActions';
import styles from './card.module.scss';

export class BookCardInList extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  onClick = () => {
    this.props.toggleFavorite(this.id);
    // console.log(this.id);
    // console.log(this.props.booksShelf.find((item) => item.id === this.id));
  };

  openModal = () => {
    const { showModal } = this.props;
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
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, { toggleFavorite, removeBook })(
  BookCardInList
);
