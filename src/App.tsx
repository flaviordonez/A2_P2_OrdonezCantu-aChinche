// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute';
import Registro from './pages/Registro'; 
import Inicio from './pages/Inicio'; // Importamos el nuevo componente Inicio
import About from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta raíz ahora apunta a Inicio */}
        <Route path="/" element={<Inicio />} /> {/* La ruta principal es Inicio */}
        <Route path="/login" element={<Login />} /> {/* Login ahora está en /login */}
        <Route path="/registro" element={<Registro />} /> {/* Ruta para el registro */}
        <Route path="/about" element={<About />} />
        {/* Rutas protegidas */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute requiredRole="publicador">
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminPanel />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
