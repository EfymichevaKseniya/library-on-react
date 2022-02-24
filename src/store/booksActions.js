const url = 'https://internsapi.public.osora.ru/api/book/list';

export const fetchBooksList = () => async (dispatch) => {
  await dispatch(fetchBooks());
};


export const fetchBooks = () => async (dispatch) => {
  const response = await fetch(url);
  console.log(response.json());

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
