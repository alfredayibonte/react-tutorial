import { PRODUCTLIST_URL } from '../../../constants/reducer';
import {
  LOAD_PRODUCTS,
  GET_PRODUCTS,
  PRODUCTS_ERROR
} from '../../../constants/reducer';

export const fetchProducts = () => {
  return async dispatch => {
    dispatch({
      type: LOAD_PRODUCTS
    });
    try {
      const res = await fetch(PRODUCTLIST_URL);
      const data = await res.json();
      dispatch({
        type: GET_PRODUCTS,
        data
      });
      return data;
    } catch (err) {
      dispatch({
        type: PRODUCTS_ERROR,
        error: err
      });
    }
  };
};
