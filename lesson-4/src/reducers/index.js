import { combineReducers } from 'redux';
import book from '../pages/books/reducers/';
const rootReducer = combineReducers({
  book
})
export default rootReducer;