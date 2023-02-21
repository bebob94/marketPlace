import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  IS_LOADING_OFF,
  IS_LOADING_ON,
} from "../action/action";

const inizialState = {
  products: [],
  hasError: false,
  isLoading: true,
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
    case IS_LOADING_ON:
      return {
        ...state,
        hasError: true,
      };
    case IS_LOADING_OFF:
      return {
        ...state,
        hasError: false,
      };
    default:
      return state;
  }
};
export default productsReducer;
