import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../utils';
import axios from 'axios';

const initialState = {
  loading: false,
  data: null,
  newClaimReqState: {
    loading: false,
    status: '',
    loaded: false,
  },
  memeber: {
    isSearchLoading: false,
    data: null,
  },
};

let token = localStorage.getItem('x-auth-token');

export const getPreAuths = createAsyncThunk('claims', async () => {
  try {
    const response = await axios.get(`${baseUrl}provider/preauth/all?pageSize=${5}`, {
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

export const newPreAuth = createAsyncThunk('newPreAuths', async (formData) => {
  console.log(...formData);
  try {
    const response = await axios({
      method: 'POST',
      url: `${baseUrl}provider/preauth/request`,
      data: formData,
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
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
    builder.addCase(newPreAuth.pending, (state) => {
      state.newClaimReqState.loading = true;
      state.newClaimReqState.loaded = false;
    });
    builder.addCase(newPreAuth.fulfilled, (state, action) => {
      state.newClaimReqState.loading = false;
      state.newClaimReqState.status = 'success';
      state.newClaimReqState.loaded = true;
    });
    builder.addCase(newPreAuth.rejected, (state) => {
      state.newClaimReqState.loading = false;
      state.newClaimReqState.status = 'failed';
      state.newClaimReqState.loaded = true;
    });
  },
});

export default AuthSlice.reducer;
