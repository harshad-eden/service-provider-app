import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  openPreAuth: false,
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    openPreAuth: (state, action) => {
      state.openPreAuth = true;
    },
    closePreAuth: (state, action) => {
      state.openPreAuth = false;
    },
  },
});

export const { openPreAuth, closePreAuth } = dashboardSlice.actions;

export default dashboardSlice.reducer;
