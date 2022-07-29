import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../utils';
import axios from 'axios';

const initialState = {
  loading: false,
  data: null,
};

let token = localStorage.getItem('x-auth-token');

export const postSupport = createAsyncThunk('support/new', async (data) => {
  console.log(data.values);
  try {
    const response = await axios({
      method: 'POST',
      url: `${baseUrl}provider/support/new`,
      data: data.values,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    data.reset();
    data.notification();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const PaymentSlice = createSlice({
  name: 'support',
  initialState: initialState,
  reducers: {
    logOut: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers(builder) {
    builder.addCase(postSupport.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postSupport.fulfilled, (state, action) => {
      state.loading = false;
      // state.content = action.payload.result?.page_content;
    });
    builder.addCase(postSupport.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default PaymentSlice.reducer;
