import React from 'react';
import BooksContext from '../../utils/BooksContext';
import BookCard from '../BookCard/AddBookCard';
import Modal from '../Modal/Modal';
import styles from './bookList.module.scss';


class BookListWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
  }

  state = {modalOpen: false}

  showModal() {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
    console.log(1)
  }

  static contextType = BooksContext;

    render() {
    const { books } = this.context;
    console.log(this.state.modalOpen);

    return (
      <ul className={styles.book__list}>
        {books.length !== 0 && books.map((book, index) => {
            return (
              <BookCard id={book.id} title={book.volumeInfo.title} key={book.id} index={index+1} />
            )
          })}
        <Modal
          visible={this.state.modalOpen}
          title='add'
          content='add'
          onClose={this.showModal}
        />
      </ul>
    )
  }
}

export default BookListWrapper;
