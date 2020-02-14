import { LOADING_BOOKS, ADD_BOOKS, BOOK_ERROR } from '../../../constants/reducer';

const defaultState = {
  loading: false,
  data: [],
  error: '',
  hasError: false
}
const bookReducer = (state= defaultState, action) => {
  switch(action.type) {
    case LOADING_BOOKS:
      return { ...state, loading: true }
    case ADD_BOOKS:
      return { ...state, loading: false, data: action.data }
    case BOOK_ERROR:
      return { ...state, loading: false, error: action.error }
    default:
      return state;
  }
}
export default bookReducer;
