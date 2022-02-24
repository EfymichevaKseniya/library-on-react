import React from 'react';
import BooksContext from '../../utils/BooksContext';
import BookCard from '../BookCard/AddBookCard';
import Modal from '../Modal/Modal';
import styles from './bookList.module.scss';


class BookListWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.addBook = this.addBook.bind(this);
    this.state = {idForShelf: ''};
  }

  state = {
    modalOpen: false,
  }

  showModal() {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  }

  addBook(e) {
    this.setState({idForShelf: e});
  }

  static contextType = BooksContext;

    render() {
    const { books } = this.context;
    const modalOpen = this.state.modalOpen;
    const idForShelf = this.state.idForShelf;
    console.log(idForShelf);

    return (
      <>
        <ul className={styles.book__list}>
          {books.length !== 0 && books.map((book, index) => {
              return (
                <BookCard
                  id={book.id}
                  title={book.volumeInfo.title}
                  key={book.id}
                  index={index+1}
                  modalOpen={modalOpen}
                  showModal={this.showModal}
                  addBook={this.addBook}
                />
              )
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
    )
  }
}

export default BookListWrapper;
