import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Redux/productSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
