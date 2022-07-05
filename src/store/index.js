import { configureStore } from '@reduxjs/toolkit';

import user from './userSlice';
import auth from './authSlice';
import dashboard from './dashboardSlice';

export const store = configureStore({
  reducer: {
    auth,
    user,
    dashboard,
  },
});
