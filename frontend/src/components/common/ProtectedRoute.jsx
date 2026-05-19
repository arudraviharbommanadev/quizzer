import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';

export default function ProtectedRoute({ children, redirectTo = '/login' }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  return user ? children : <Navigate to={redirectTo} replace />;
}
