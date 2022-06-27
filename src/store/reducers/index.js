import { combineReducers } from 'redux';

import authReducer from './authReducer';
import registerReducer from './registerReducer';
import userReducer from './userReducer';

export default combineReducers({
  auth: authReducer,
  register: registerReducer,
  user: userReducer,
});
