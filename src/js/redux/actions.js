import * as actions from './actionTypes';

export const BASEURL = 'https://internsapi.public.osora.ru/api/book';
export const token = localStorage.getItem('token');

// export const fetchBooks = () => async (dispatch) => {
//   const response = await fetch(`${BASEURL}/list`, {
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//       Authorization: `Bearer${token}`,
//     },
//   });
// }

export function booksFetchData() {
  return async (dispatch) => {
    dispatch(booksIsLoading(true));

    fetch(`${BASEURL}/list`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(booksIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((books) => dispatch(booksFetchDataSuccess(books)))
      .catch(() => dispatch(booksHasErrored(true)));
  };
}

export function booksHasErrored(bool) {
  return {
    type: actions.BOOKS_HAS_ERRORED,
    hasErrored: bool,
  };
}

export function booksIsLoading(bool) {
  return {
    type: actions.BOOKS_IS_LOADING,
    isLoading: bool,
  };
}

export function booksFetchDataSuccess(books) {
  return {
    type: actions.FETCH_BOOKS,
    books,
  };
}
