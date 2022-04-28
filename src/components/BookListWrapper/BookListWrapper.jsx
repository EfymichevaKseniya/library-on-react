import React from 'react';
import BooksContext from '../../utils/BooksContext';
import BookCard from '../BookCard/AddBookCard';
import { Modal } from '../Modal/Modal';
import styles from './bookList.module.scss';

const contextType = BooksContext;
class BookListWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.addBook = this.addBook.bind(this);
    this.state = { idForShelf: '', modalOpen: false };
  }

  showModal() {
    this.setState((prevState) => ({
      modalOpen: !prevState.modalOpen,
    }));
  }

  addBook(e) {
    this.setState({ idForShelf: e });
  }

  render() {
    const { books } = contextType;
    const { modalOpen, idForShelf } = this.state;

    return (
      <>
        <ul className={styles.book__list}>
          {books.length !== 0 &&
            books.map((book, index) => {
              return (
                <BookCard
                  id={book.id}
                  title={book.volumeInfo.title}
                  key={book.id}
                  index={index + 1}
                  modalOpen={modalOpen}
                  showModal={this.showModal}
                  addBook={this.addBook}
                />
              );
            })}
        </ul>
        <Modal
          modalOpen={modalOpen}
          id={idForShelf}
          title='Add'
          content='add'
          showModal={this.showModal}
        />
      </>
    );
  }
}

export default BookListWrapper;
