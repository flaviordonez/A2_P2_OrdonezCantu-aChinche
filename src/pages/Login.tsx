import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface User {
  username: string;
  password: string;
  role: string;
}

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  };

  // Función para redirigir a la página de registro
  const handleGoToRegister = () => {
    navigate('/registro');
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5,border:'1px solid blue', textAlign:'center' }}>
      <Typography variant="h4" gutterBottom>Iniciar Sesión</Typography>
      <TextField 
        label="Usuario" 
        variant="outlined" 
        fullWidth 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        sx={{ mb: 2 }} 
      />
      <TextField 
        label="Contraseña" 
        type="password" 
        variant="outlined" 
        fullWidth 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        sx={{ mb: 2 }} 
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Iniciar Sesión
      </Button>
      
      {/* Botón para redirigir a la página de registro */}
      <Button 
        variant="outlined" 
        fullWidth 
        sx={{ mt: 2 }} 
        onClick={handleGoToRegister}
      >
        No tienes cuenta? Regístrate
      </Button>
    </Box>
  );
};

export default Login;
