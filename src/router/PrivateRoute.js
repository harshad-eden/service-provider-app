import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const auth = localStorage.getItem('x-auth-token') ? localStorage.getItem('x-auth-token') : false;
  return auth ? children : <Navigate to="/login" replace={true} />;
};
