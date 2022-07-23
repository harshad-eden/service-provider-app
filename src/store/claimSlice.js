import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../utils';
import axios from 'axios';

const initialState = {
  error: null,
  loading: false,
  claims: [],
};

let token = localStorage.getItem('x-auth-token');

export const getAllClaims = createAsyncThunk('claims', async () => {
  const options = { method: 'GET', headers: { Accept: '*/*', 'Content-type': 'application/json' } };

  fetch('https://service.edencaremedical.com/api/provider/claim/allClaim', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
});

export const AuthSlice = createSlice({
  name: 'auth',
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
    builder.addCase(getAllClaims.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllClaims.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.claims = action.payload;
    });
    builder.addCase(getAllClaims.rejected, (state, action) => {
      console.log(action);
      state.loading = false;
    });
  },
});

export default AuthSlice.reducer;
