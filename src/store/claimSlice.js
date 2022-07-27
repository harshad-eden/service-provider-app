import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../utils';
import axios from 'axios';

const initialState = {
  loading: false,
  data: null,
  content: [],
  newReqState: {
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

export const getClaims = createAsyncThunk('claims', async (args) => {
  try {
    const response = await axios.get(
      `${baseUrl}provider/claim/all?page=${args.page}&size=${args.size}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getClaimsWithFilter = createAsyncThunk('claims/filter', async (filter) => {
  try {
    const response = await axios.get(`${baseUrl}provider/claim/all?status=${filter}`, {
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

export const getMemberByCardNumb = createAsyncThunk('searchMember/claims', async (numb) => {
  alert('looo');
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

export const newClaim = createAsyncThunk('newPreAuths', async (formData) => {
  console.log(...formData);
  try {
    const response = await axios({
      method: 'POST',
      url: `${baseUrl}provider/claim/generate`,
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

export const claimSlice = createSlice({
  name: 'claim',
  initialState: initialState,
  reducers: {
    resetRequest: (state) => {
      state.newReqState.loading = false;
      state.newReqState.loaded = false;
      state.newReqState.status = '';
    },
    logOut: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers(builder) {
    builder.addCase(getClaims.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getClaims.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.result;
      state.content = action.payload.result.page_content;
    });
    builder.addCase(getClaims.rejected, (state, action) => {
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
    builder.addCase(newClaim.pending, (state) => {
      state.newReqState.loading = true;
    });
    builder.addCase(newClaim.fulfilled, (state, action) => {
      state.newReqState.loading = false;
      state.newReqState.status = 'success';
      state.newReqState.loaded = true;
      state.content = [...state.content, action.payload.result];
    });
    builder.addCase(newClaim.rejected, (state) => {
      state.newReqState.loading = false;
      state.newReqState.status = 'failed';
      state.newReqState.loaded = true;
    });
    builder.addCase(getClaimsWithFilter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getClaimsWithFilter.fulfilled, (state, action) => {
      state.loading = false;
      state.content = action.payload.result?.page_content;
    });
    builder.addCase(getClaimsWithFilter.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { resetRequest } = claimSlice.actions;

export default claimSlice.reducer;
