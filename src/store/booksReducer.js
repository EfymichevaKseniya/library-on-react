/* eslint-disable default-param-last */
import * as actions from './actionTypes';

// export default (state = [], action) => {
//   switch (action.type) {
//     case "FETCH_BOOKS":
//       return action.payload;
//     default:
//       return state;
//   }
// };

const initialState = {
  booksShelf: [],
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_BOOK:
      return {
        ...state,
        booksShelf: [action.payload, ...state.booksShelf],
      };
    case actions.TOGGLE_FAVORITE:
      return Object.assign(...state, {
        booksShelf: state.booksShelf.map((book) => {
          return book.id === action.payload.id
            ? Object.assign(...book, { favorite: !book.favorite })
            : book;
        }),
      });

    case actions.REMOVE_BOOK:
      // return state.booksShelf.filter(book => action.payload.id !== book.id);
      return Object.assign(...state, {
        booksShelf: state.booksShelf.filter(
          (book) => action.payload.id !== book.id
        ),
      });
    default:
      return state;
  }
}
