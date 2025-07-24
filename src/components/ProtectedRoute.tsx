import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

export function ProtectedAdminRoute({ children }: Props) {
  const userStr = localStorage.getItem('user');
  if (!userStr) {
    return <Navigate to="/LoginPage" replace />;
  }

  const user = JSON.parse(userStr);

  if (user.role !== 'admin') {
    alert('No tienes permiso para acceder a esta página');
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
