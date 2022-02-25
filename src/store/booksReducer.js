import * as actions from './actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_BOOKS":
      return action.payload;
    default:
      return state;
  }
};

export function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_BOOK:
      return [...state, {
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        authors: action.payload.authors,
        favorite: 0,
      }];

    case actions.TOGGLE_FAVORITE:
      return state.map(book => {
        if (book.id === action.payload.id)
          return { ...book, favorite: !book.favorite }
        return book;
      });

    case actions.REMOVE_BOOK:
      return state.filter(book => action.payload.id !== book.id);

    default:
      return state;
  }
}

