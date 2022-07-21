import { useEffect } from 'react';
import Routing from './router';
import decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('x-auth-token');

  useEffect(() => {
    if (token) {
      const decodedToken = decode(token);
      const currentDate = new Date();
      if (decodedToken && decodedToken.exp * 1000 < currentDate.getTime()) {
        localStorage.clear();
        navigate('/login');
      }
    } else {
      localStorage.clear();
      navigate('/login');
    }
  }, [navigate, token]);

  return (
    <div>
      <Routing />
    </div>
  );
};

export default App;
