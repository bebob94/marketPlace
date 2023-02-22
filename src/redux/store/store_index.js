import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducer/CartReducer";
import productsReducer from "../reducer/ProductReducer";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY,
    }),
  ],
};

const combine = combineReducers({
  productsData: productsReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, combine);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
