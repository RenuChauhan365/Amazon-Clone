import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/products'); // Update the API endpoint
      return response.data.products;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
