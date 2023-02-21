import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducer/CartReducer";
import productsReducer from "../reducer/ProductReducer";

const combine = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: combine,
});

export default store;
