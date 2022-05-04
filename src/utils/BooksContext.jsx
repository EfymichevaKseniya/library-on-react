import React, { Component } from 'react';

const BooksContext = React.createContext();

class BooksContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  // Context state

  // Method to update state
  setBooks = (books) => {
    this.setState({ books });
  };

  render() {
    const { children } = this.props;
    const { books } = this.state;
    const { setBooks } = this;

    return (
      <BooksContext.Provider
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={{
          books,
          setBooks,
        }}
      >
        {children}
      </BooksContext.Provider>
    );
  }
}

export default BooksContext;

export { BooksContextProvider };
