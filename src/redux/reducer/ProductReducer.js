import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  IS_LOADING_OFF,
  PRODUCT_SELECTED,
} from "../action/action";

const inizialState = {
  products: [],
  hasError: false,
  isLoading: true,
  cardSelected: null,
};

const productsReducer = (state = inizialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        hasError: true,
      };
    case IS_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };
    case PRODUCT_SELECTED:
      return {
        ...state,
        cardSelected: action.payload,
      };
    default:
      return state;
  }
};
export default productsReducer;
