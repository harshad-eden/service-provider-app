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

export const loginUserWithEmail = createAsyncThunk('auth/login', async (args) => {
  const response = await axios.post(`${baseUrl}provider/user/account/login`, args.values);
  const { data } = response;
  if (data?.api.responseCode === 2250) {
    localStorage.setItem('x-auth-token', response.headers.token);
    localStorage.setItem('providerUser', JSON.stringify(data.result.user));
    args.navigate('/');
    return data;
  } else {
    throw data;
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
      console.log(action.payload);
      state.loading = false;
      state.isAuthenticated = true;
      state.provider = action.payload.result.provider;
      state.user = action.payload.result.user;
      state.role = action.payload?.result.role;
      state.error = null;
    });
    builder.addCase(loginUserWithEmail.rejected, (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = 'Oops! Invalid credentials';
    });
  },
});

export default AuthSlice.reducer;
