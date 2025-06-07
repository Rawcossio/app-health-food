import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isAuthenticated');

  return isLoggedIn === 'true' ? children : <Navigate to="/HomeUser" />;
};

export default ProtectedRoute;