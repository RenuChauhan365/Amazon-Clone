import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Redux/productSlice';
import cartReducer from '../Redux/cartSlice'

const store = configureStore({
  reducer: {
    products: productReducer,
    cart:cartReducer
  },
});

export default store;
