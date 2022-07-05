import { configureStore } from '@reduxjs/toolkit';

import user from './userSlice';
import auth from './authSlice';

export const store = configureStore({
  reducer: {
    auth,
    user,
  },
});
