import React from 'react';
import { connect } from "react-redux";
// import { fetchBooksList } from '../../store/booksActions';
import BookCardInList from '../BookCard/BookCardInList';
import ModalDeleteBook from '../Modal/ModalDeleteBook';
import styles from './bookList.module.scss';


export class BookListWrapperForMyBooks extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.state = {idForShelf: ''};
    this.books = this.props.books;
  }

  state = {
    modalOpen: false,
  }

  showModal() {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  }

  deleteBook(e) {
    this.setState({idForShelf: e});
  }

    render() {
    // const books  = this.props.booksShelf;
    const modalOpen = this.state.modalOpen;
    const idForShelf = this.state.idForShelf;
    console.log(this.books);

    return (
      <>
        <ul className={styles.book__list}>
          {this.books && this.books.map((book, index) => {
              return (
                <BookCardInList
                  id={book.id}
                  title={book.title}
                  key={book.id}
                  index={index+1}
                  modalOpen={modalOpen}
                  favorite={book.favorite}
                  showModal={this.showModal}
                  deleteBook={this.deleteBook}
                />
              )
            })}
        </ul>
        <ModalDeleteBook
          modalOpen={modalOpen}
          id={idForShelf}
          title='Delete'
          content='delete'
          showModal={this.showModal}
        />
      </>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(BookListWrapperForMyBooks);
