import {
  LOAD_PRODUCTS,
  GET_PRODUCTS,
  PRODUCTS_ERROR
} from '../../../constants/reducer';

const initialState = {
  loading: false,
  hasError: false,
  error: '',
  data: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        loading: true
      };
    case GET_PRODUCTS:
      return {
        ...state,
        loading: false,
        hasError: false,
        data: action.data
      };
    case PRODUCTS_ERROR:
      return {
        ...state,
        hasError: true,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};
export default productsReducer;
