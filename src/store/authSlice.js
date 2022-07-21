import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../utils';
import axios from 'axios';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  error: null,
  provider: null,
  user: null,
  role: null,
};

export const loginUserWithEmail = createAsyncThunk('auth/login', async (args, state) => {
  const response = await axios.post(`${baseUrl}provider/user/account/login`, args.values);
  if (response.data?.api.responseCode === 2250) {
    localStorage.setItem('x-auth-token', response.headers.token);
    args.navigate('/');
    return response.data;
  } else {
    throw response.data;
  }
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
    builder.addCase(loginUserWithEmail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUserWithEmail.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.provider = action.payload?.provider;
      state.user = action.payload?.user;
      state.role = action.payload?.role;
    });
    builder.addCase(loginUserWithEmail.rejected, (state, action) => {
      console.log(action);
      state.loading = false;
      // state.error = action.error.message;
      state.error = 'Wrong Email or Password';
    });
  },
});

export default AuthSlice.reducer;
