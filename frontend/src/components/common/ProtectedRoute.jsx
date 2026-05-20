import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';

export default function ProtectedRoute({ children, redirectTo = '/login', requireRole }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return <Navigate to={redirectTo} replace />;
  if (requireRole && user.role !== requireRole) return <Navigate to="/unauthorized" replace />;
  return children;
}
