import { combineReducers } from 'redux';
import book from '../pages/books/reducers/';
import products from '../pages/products/reducers';
const rootReducer = combineReducers({
  book,
  products
});
export default rootReducer;
