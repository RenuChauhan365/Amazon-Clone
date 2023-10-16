import axios from 'axios';
import { addToCart, removeFromCart, clearCart } from '../Redux/cartSlice';
import  useAuth from '../Context/Auth'


export const addItemToCart = (product) => async (dispatch) => {

  const {token} = useAuth()

  try {

    const response = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API}/api/cart/add`,
      headers: {
        'Authorization': token
      },
      data: {"ProductId": 1, quantity: 1}
    })

    console.log("API Response:", response.data); // Response data


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
