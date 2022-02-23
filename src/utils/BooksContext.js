import React, { Component } from 'react'

const BooksContext = React.createContext();

class BooksContextProvider extends Component {
  // Context state
  state = {
    books: [],
  }

  // Method to update state
  setBooks = (books) => {
    this.setState((prevState) => ({ books }))
  }

  render() {
    const { children } = this.props
    const { books } = this.state
    const { setBooks } = this

    return (
      <BooksContext.Provider
        value={{
          books,
          setBooks,
        }}
      >
        {children}
      </BooksContext.Provider>
    )
  }
}

export default BooksContext;

export { BooksContextProvider };
