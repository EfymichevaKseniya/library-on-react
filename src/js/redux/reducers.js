/* eslint-disable default-param-last */
import * as actions from './actionTypes';

export function booksHasErrored(state = false, action) {
  switch (action.type) {
    case actions.BOOKS_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
}

export function booksIsLoading(state = false, action) {
  switch (action.type) {
    case actions.BOOKS_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

export function books(state = [], action) {
  switch (action.type) {
    case actions.FETCH_BOOKS:
      return action.books;

    default:
      return state;
  }
}
