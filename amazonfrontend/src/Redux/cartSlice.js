import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.product_id === newItem.product_id);

      state.totalQuantity++;
      state.totalPrice += newItem.price_per_unit;

      if (existingItem) {
        existingItem.quantity++;
        existingItem.total_price += newItem.price_per_unit;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          total_price: newItem.price_per_unit,
        });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const existingItem = state.items.find(item => item.product_id === productId);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.total_price;
        state.items = state.items.filter(item => item.product_id !== productId);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;
export const selectTotalQuantity = state => state.cart.totalQuantity;
export const selectTotalPrice = state => state.cart.totalPrice;

export default cartSlice.reducer;
