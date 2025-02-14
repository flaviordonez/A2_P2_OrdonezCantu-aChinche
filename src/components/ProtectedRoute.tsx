// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'publicador' | 'admin';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('currentUser') || 'null');  // Corregido 'user' a 'currentUser'
  
  console.log("User from localStorage:", user);  // Verificar el valor del usuario
  
  if (!user) {
    console.log("No user found, redirecting to /login");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    console.log(`User role ${user.role} doesn't match the required role ${requiredRole}, redirecting to /dashboard`);
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
