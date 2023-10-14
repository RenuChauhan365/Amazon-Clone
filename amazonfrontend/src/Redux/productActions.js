import axios from 'axios';
import {fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure
} from './productSlice'

export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/api/products`);
    console.log('Fetched products:', response.data);
    dispatch(fetchProductsSuccess(response.data.products));
  } catch (error) {
    console.error('Error fetching products:', error);
    dispatch(fetchProductsFailure(error.message));
  }
};
