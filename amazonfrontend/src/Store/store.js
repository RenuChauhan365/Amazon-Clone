import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productReducer from '../Redux/productSlice';
import cartReducer from '../Redux/cartSlice'
import searchReducer from '../Redux/searchSlice'

const store = configureStore({
  reducer: {
    products: productReducer,
    cart:cartReducer,
    search:searchReducer

  },
  middleware:[thunk]
});

export default store;
