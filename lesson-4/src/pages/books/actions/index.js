import { BOOKLIST_URL } from '../../layout/Contants';
import { BOOK_ERROR, ADD_BOOKS, LOADING_BOOKS } from '../../../constants/reducer';

export const bookList = async () => {
  try {
    const res = await fetch(BOOKLIST_URL);
    return await res.json();
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchBooks = () => {
  return async (dispatch) => {
    dispatch({
      type: LOADING_BOOKS
    })
    try {
      const res = await fetch(BOOKLIST_URL);
      const data = await res.json();
      dispatch({
        type: ADD_BOOKS,
        data
      })
      return data
    } catch (err) {
      dispatch({
        type: BOOK_ERROR,
        error: err
      })
    }

  }
}
