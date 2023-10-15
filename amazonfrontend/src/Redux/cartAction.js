import axios from 'axios';
import { addToCart, removeFromCart, clearCart } from '../Redux/cartSlice';

export const addItemToCart = (product) => async (dispatch) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API}/api/cart/add`);
    product = response.data;
    dispatch(addToCart(product));


  } catch (error) {
		console.log(error.message);
	}
};

export const removeItemFromCart = (productId) => async (dispatch) => {
  try {
    await axios.delete(`${process.env.REACT_APP_API}/api/cart/remove`, { data: { productId } });
    dispatch(removeFromCart(productId));
  } catch (error) {
		console.log(error.message);

  }
};

export const clearCartItems = () => async (dispatch) => {
  try {
    await axios.delete(`${process.env.REACT_APP_API}/api/cart/removeAll`);
    dispatch(clearCart());
  } catch (error) {
		console.log(error.message);
  }
};
