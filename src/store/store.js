import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slices/wishlistSlice";

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer, // Подключаем wishlist
  },
});

export default store;
