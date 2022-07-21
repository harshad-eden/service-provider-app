import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://my-json-server.typicode.com/typicode/demo/posts';

const initialSlice = {
  counter: 0,
  posts: [],
  loading: false,
  token: null,
};

export const attachTokenToHeaders = (getState) => {
  let token = 'token';
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
};

export const fetchPost = createAsyncThunk('user/getUser', async (arg, state) => {
  const options = attachTokenToHeaders(state);
  try {
    const response = await axios.get(baseUrl, options);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialSlice,
  reducers: {
    increment: (state, actions) => {
      return state.counter + 1;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchPost.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
