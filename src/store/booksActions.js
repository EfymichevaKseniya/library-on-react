import * as actions from './actionTypes';
const url = 'https://internsapi.public.osora.ru/api/book/list';
const token = localStorage.getItem('token');

// export const fetchBooksList = () => async (dispatch) => {
//   await dispatch(fetchBooks());
// };


export const fetchBooks = () => async (dispatch) => {
  const response = await fetch(`${url}?Authorization=Bearer${token}`);
  let result = await response.json();
  console.log(result)
  console.log(1);

  dispatch({ type: "FETCH_BOOKS", payload: response.data });
};


export const addBook = book => ({
  type: actions.ADD_BOOK,
  payload: book
});

export const toggleFavorite = id => ({
  type: actions.TOGGLE_FAVORITE,
  payload: { id }
});

export const removeBook = id => ({
  type: actions.REMOVE_BOOK,
  payload: { id }
})
