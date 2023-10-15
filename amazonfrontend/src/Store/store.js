import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productReducer from '../Redux/productSlice';
import cartReducer from '../Redux/cartSlice'

const store = configureStore({
  reducer: {
    products: productReducer,
    cart:cartReducer
  },
  middleware:[thunk]
});

export default store;
