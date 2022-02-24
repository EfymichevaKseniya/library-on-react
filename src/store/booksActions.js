const url = 'https://internsapi.public.osora.ru/api/book/list';
const token = localStorage.getItem('token');

export const fetchBooksList = () => async (dispatch) => {
  await dispatch(fetchBooks());
};


export const fetchBooks = () => async (dispatch) => {
  const response = await fetch(`${url}?access_token=${token}`);
  let result = await response.json();
  console.log(result)
  console.log(1);

  dispatch({ type: "FETCH_BOOKS", payload: response.data });
};
