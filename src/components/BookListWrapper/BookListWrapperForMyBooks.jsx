import React from 'react';
import { connect } from "react-redux";
import { fetchBooksList } from '../../store/booksActions';
import BookCardInList from '../BookCard/BookCardInList';
import Modal from '../Modal/Modal';
import styles from './bookList.module.scss';


export class BookListWrapperForMyBooks extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.books = props.books;
    this.state = {idForShelf: ''};
  }

  componentDidMount() {
    fetchBooksList();
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
    const modalOpen = this.state.modalOpen;
    const idForShelf = this.state.idForShelf;
    console.log(this.books);

    return (
      <>
        <ul className={styles.book__list}>
          {this.props.books.length !== 0 && this.props.books.map((book, index) => {
              return (
                <BookCardInList
                  id={book.id}
                  title={book.volumeInfo.title}
                  key={book.id}
                  index={index+1}
                  modalOpen={modalOpen}
                  showModal={this.showModal}
                  deleteBook={this.deleteBook}
                />
              )
            })}
        </ul>
        <Modal
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

const mapStateToProps = (state) => {
  return { books: state.books };
};

export default connect(mapStateToProps, { fetchBooksList })(BookListWrapperForMyBooks);
