import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface User {
  username: string;
  password: string;
  role: string;
}

const Registro: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!username || !password || !role) {
      alert('Por favor, completa todos los campos.');
      return;
    }



    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.find((user: User) => user.username === username);

    if (userExists) {
      alert('Este usuario ya está registrado.');
      return;
    }

    const newUser = { username, password, role };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Usuario registrado exitosamente.');
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1); // Volver atrás en el historial
  };



  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5 ,border:'1px blue solid',textAlign: 'center'}}>
      <Typography variant="h4" gutterBottom>Registro</Typography>
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
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Rol</InputLabel>
        <Select
          value={role}
          label="Rol"
          onChange={(e) => setRole(e.target.value)}
        >
          <MenuItem value="publicador">Publicador</MenuItem>
          <MenuItem value="admin">Administrador</MenuItem>
        </Select>
      </FormControl>
      
      <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>
        Registrarse
      </Button>
      <Button
        variant="contained"
        fullWidth
        onClick={handleGoBack}
        sx={{background:'white',color:'black'}}
      >Atras</Button>
    </Box>
  );
};

export default Registro;
