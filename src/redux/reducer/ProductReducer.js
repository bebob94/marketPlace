import { GET_PRODUCTS, GET_PRODUCTS_ERROR } from "../action/action";

const inizialState = {
  products: [],
  hasError: false,
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
    default:
      return state;
  }
};
export default productsReducer;
