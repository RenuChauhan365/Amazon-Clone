import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchProductsStart(state , action) {
      console.log('fetchProductsStart action:', action);
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action) {
      console.log('fetchProductsSuccess action:', action);
      state.loading = false;
      state.error = null; // this is for the clear previous errors
      state.products = action.payload;
    },
    fetchProductsFailure(state, action) {
      console.log('fetchProductsSuccess action:', action);
      state.loading = false;
      state.error = action.payload;
    },

  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productSlice.actions;

export default productSlice.reducer;
