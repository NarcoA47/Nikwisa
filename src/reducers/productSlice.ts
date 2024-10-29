import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ReactNode } from 'react';

// Interfaces
interface Product {
  stock: ReactNode;
  rating: number;
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

interface Category {
  id: number;
  name: string;
  image: string;
}

interface FetchProductsPayload {
  results: Product[];
}

interface FetchCategoriesPayload {
  results: Category[];
}

interface ProductState {
  products: Product[];
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  categories: [],
  loading: false,
  error: null,
};

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/products/`);
      return response.data as FetchProductsPayload;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue('An unknown error occurred');
      }
    }
  }
);

// Async thunk for adding a product
export const addProduct = createAsyncThunk('products/addProduct', async (product: Omit<Product, 'id'>, thunkAPI) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/products`, product);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    } else {
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  }
});

// Async thunk for fetching categories
export const fetchCategories = createAsyncThunk(
  'products/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/categories`);
      return response.data as FetchCategoriesPayload;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue('An unknown error occurred');
      }
    }
  }
);

// Slice
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<FetchProductsPayload>) => {
      state.loading = false;
      state.products = action.payload.results;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(addProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addProduct.fulfilled, (state, action: PayloadAction<Product>) => {
      state.loading = false;
      state.products.push(action.payload);
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action: PayloadAction<FetchCategoriesPayload>) => {
      state.loading = false;
      state.categories = action.payload.results;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default productSlice.reducer;