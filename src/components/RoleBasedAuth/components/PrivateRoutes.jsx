import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute({ allowedRoles }) {
  const { user } = useAuth();

  if (!user) return <Navigate to={'/login'} replace />;

  if (user.userType === 'guest') return <Navigate to={'/'} replace />;

  if (!allowedRoles.includes(user.userType))
    return <Navigate to={'/'} replace />;

  return <Outlet />;
}
