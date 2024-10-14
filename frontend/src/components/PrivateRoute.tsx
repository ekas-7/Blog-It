// PrivateRoute.tsx
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token'); // Adjust based on your token storage

  if (!token) {
    return <Navigate to="/signin" replace />; // Redirect to login if token is not found
  }

  return children; // Render the child components if token is found
};

export default PrivateRoute;
