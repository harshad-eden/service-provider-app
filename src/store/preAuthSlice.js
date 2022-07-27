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

export const getPreAuths = createAsyncThunk('preAuths', async (args) => {
  try {
    const response = await axios.get(
      `${baseUrl}provider/preauth/all?page=${args.page}&size=${args.size}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log('response.data', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getPreAuthsWithFilter = createAsyncThunk('preAuths/filter', async (filter) => {
  try {
    const response = await axios.get(`${baseUrl}provider/preauth/all?status=${filter}`, {
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
    console.log('respo++', response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const PreAuthSlice = createSlice({
  name: 'preAuths',
  initialState: initialState,
  reducers: {
    resetRequest: (state) => {
      state.newReqState.loading = false;
      state.newReqState.loaded = false;
      state.newReqState.status = '';
      state.newReqState.data = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(getPreAuths.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPreAuths.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.result;
      state.content = action.payload.result.page_content;
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
      state.newReqState.loading = true;
    });
    builder.addCase(newPreAuth.fulfilled, (state, action) => {
      state.newReqState.loading = false;
      state.newReqState.status = 'success';
      state.newReqState.loaded = true;
      state.content = [action.payload.result, ...state.content];
    });
    builder.addCase(newPreAuth.rejected, (state) => {
      state.newReqState.loading = false;
      state.newReqState.status = 'failed';
      state.newReqState.loaded = true;
    });
    builder.addCase(getPreAuthsWithFilter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPreAuthsWithFilter.fulfilled, (state, action) => {
      state.loading = false;
      state.content = action.payload.result?.page_content;
    });
    builder.addCase(getPreAuthsWithFilter.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { resetRequest } = PreAuthSlice.actions;

export default PreAuthSlice.reducer;
