import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../utils';
import axios from 'axios';

const initialState = {
  loading: false,
  data: null,
  memeber: {
    isSearchLoading: false,
    data: null,
  },
};

let token = localStorage.getItem('x-auth-token');

export const getPreAuths = createAsyncThunk('preAuths', async () => {
  try {
    const response = await axios.get(`${baseUrl}provider/preauth/all`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getMemberByCardNumb = createAsyncThunk('searchMember', async (numb) => {
  try {
    const response = await axios.get(`${baseUrl}provider/member/profile/card-number/${numb}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
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
    builder.addCase(getPreAuths.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPreAuths.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.result;
    });
    builder.addCase(getPreAuths.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getMemberByCardNumb.pending, (state) => {
      state.isSearchLoading = true;
    });
    builder.addCase(getMemberByCardNumb.fulfilled, (state, action) => {
      state.isSearchLoading = false;
      state.memeber.data = action.payload.result;
    });
    builder.addCase(getMemberByCardNumb.rejected, (state) => {
      state.memeber.isSearchLoading = false;
    });
  },
});

export default AuthSlice.reducer;
