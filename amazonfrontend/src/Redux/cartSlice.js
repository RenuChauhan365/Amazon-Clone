import { createSlice } from "@reduxjs/toolkit";


// function for the store the totalQuantity ,totalPrice in localStorage
const updateLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state.items));
  localStorage.setItem("totalQuantity", state.totalQuantity);
  localStorage.setItem("totalPrice", state.totalPrice);
};



export const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: JSON.parse(localStorage.getItem("cart")) || [], //  cart items from local storage
    totalQuantity: parseInt(localStorage.getItem("totalQuantity"), 10) || 0,
    totalPrice: parseFloat(localStorage.getItem("totalPrice")) || 0
  },
  reducers: {

    addToCart: (state, action) => {
			const { productId, quantity , price_per_unit , name , price , description ,image } = action.payload;
      const newItem = {
				product_id : productId,
				quantity: quantity,
        price_per_unit: price_per_unit ,
        name : name,
        price : price,
        description: description,
        image: image

			}

      const existingItem = state.items.find(
        (item) => item.product_id === newItem.product_id
      );


			if (existingItem) {
        existingItem.quantity++;
        existingItem.total_price += newItem.price_per_unit;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          total_price: newItem.quantity *newItem.price_per_unit,
          name: newItem.name,
          price: newItem.price,
          description: newItem.description,
          image: newItem.image
        });
      }

			state.totalQuantity += 1;
      state.totalPrice += newItem.price_per_unit;

      //localStorage.setItem("cart", JSON.stringify(state.items));

      updateLocalStorage(state);
    },


      removeFromCart: (state, action) => {
        const productId = action.payload;

        const existingItem = state.items.find(
          (item) => item.product_id === productId
        );

        if (existingItem) {
          state.totalQuantity -= existingItem.quantity;
          state.totalPrice -= existingItem.total_price;


          state.items = state.items.filter(
            (item) => item.product_id !== productId
          )
        }

        //localStorage.setItem("cart", JSON.stringify(state.items));
        updateLocalStorage(state);
      },


    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      localStorage.removeItem("cart");

    },
  },



});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectTotalQuantity = (state) => state.cart.totalQuantity;
export const selectTotalPrice = (state) => state.cart.totalPrice;

export default cartSlice.reducer;










