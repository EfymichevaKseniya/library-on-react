import React from 'react';
import { connect } from 'react-redux';
import { BookCardInList } from '../BookCard/BookCardInList';
import { ModalDeleteBook } from '../Modal/ModalDeleteBook';
import styles from './bookList.module.scss';

export class BookListWrapperForMyBooks extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.state = { idForShelf: '', modalOpen: false };
  }

  deleteBook = (e) => {
    this.setState({ idForShelf: e });
  };

  showModal() {
    this.setState((prevState) => ({
      modalOpen: !prevState.modalOpen,
    }));
  }

  render() {
    const { modalOpen, idForShelf } = this.state;
    const { books, reRenderParent } = this.props;
    return (
      <>
        <ul className={styles.book__list}>
          {books &&
            books.map((book, index) => {
              return (
                <BookCardInList
                  id={book.id}
                  title={book.title}
                  key={book.id}
                  index={index + 1}
                  modalOpen={modalOpen}
                  favorite={book.favorite}
                  showModal={this.showModal}
                  deleteBook={this.deleteBook}
                  reRender={reRenderParent}
                />
              );
            })}
        </ul>
        <ModalDeleteBook
          modalOpen={modalOpen}
          id={idForShelf}
          title='Delete'
          content='delete'
          showModal={this.showModal}
          deleteBook={this.deleteBook}
          reRender={reRenderParent}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(BookListWrapperForMyBooks);
