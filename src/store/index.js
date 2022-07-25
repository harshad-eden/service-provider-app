import { configureStore } from '@reduxjs/toolkit';

import user from './userSlice';
import auth from './authSlice';
import dashboard from './dashboardSlice';
import claims from './claimSlice';
import preAuth from './preAuthSlice';
import payment from './paymentSlice';
import reports from './reportSlice';

export const store = configureStore({
  reducer: {
    auth,
    user,
    dashboard,
    claims,
    preAuth,
    payment,
    reports,
  },
});
