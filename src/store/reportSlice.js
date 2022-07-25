import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../utils';
import axios from 'axios';

const initialState = {
  loading: false,
  data: null,
  content: [],
};

let token = localStorage.getItem('x-auth-token');

export const pendingClaimsReport = createAsyncThunk('reportClaims', async (args) => {
  try {
    const response = await axios.get(`${baseUrl}provider/report/claim`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    args.modalOf();
    return response.data;
  } catch (error) {
    args.modalOf();
    console.log(error);
  }
});

export const approvedPreAuthsReport = createAsyncThunk('report/preAuths', async (args) => {
  try {
    const response = await axios.get(`${baseUrl}provider/report/pre-auth`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    args.modalOf();
    return response.data;
  } catch (error) {
    args.modalOf();
    console.log(error);
  }
});

export const getPaymentReport = createAsyncThunk('report', async () => {
  try {
    const response = await axios.get(`${baseUrl}provider/report/payment`, {
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

export const ReportSlice = createSlice({
  name: 'payment',
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
    builder.addCase(pendingClaimsReport.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(pendingClaimsReport.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.result;
      state.content = action.payload.result.page_content;
    });
    builder.addCase(pendingClaimsReport.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(approvedPreAuthsReport.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(approvedPreAuthsReport.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.result;
      state.content = action.payload.result.page_content;
    });
    builder.addCase(approvedPreAuthsReport.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getPaymentReport.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPaymentReport.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.result;
      state.content = action.payload.result.page_content;
    });
    builder.addCase(getPaymentReport.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default ReportSlice.reducer;
