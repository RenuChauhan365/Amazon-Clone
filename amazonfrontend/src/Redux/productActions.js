import axios from 'axios';
import {fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure
} from './productSlice'

export const fetchProducts = (searchQuery) => async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/api/products`);
    dispatch(fetchProductsSuccess(response.data.products));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};


export const searchProducts = (query) => async (dispatch) => {

  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/api/products/search?query=${query}`);
    dispatch(fetchProductsSuccess(response.data.products));
  } catch (error) {
    console.error('Error fetching products:', error);

  }
};