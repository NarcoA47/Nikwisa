import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


interface Store {
  id: number;
  name: string;
  description: string;
  image: string;
  owner: string; // Add owner property
}

interface FetchStoresPayload {
  results: Store[];
}

interface StoreState {
  stores: Store[];
  loading: boolean;
  error: string | null;
}

const initialState: StoreState = {
  stores: [],
  loading: false,
  error: null,
};

// Async Thunks
export const fetchStores = createAsyncThunk('stores/fetchStores', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState() as { auth: { accessToken: string | null } };
    const accessToken = state.auth.accessToken;

    if (!accessToken) {
      return thunkAPI.rejectWithValue('No access token found');
    }

    // Decode the JWT token to get user information
    const decodedToken = jwtDecode<{ user_id: number }>(accessToken);

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/stores`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        user_id: decodedToken.user_id,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    } else {
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  }
});

// Slice
const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStores.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchStores.fulfilled, (state, action: PayloadAction<FetchStoresPayload>) => {
      state.loading = false;
      state.stores = action.payload.results;
    });
    builder.addCase(fetchStores.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default storeSlice.reducer;