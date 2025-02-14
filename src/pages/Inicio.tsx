// src/pages/Inicio/Inicio.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Inicio: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: 5 }}>
      <Typography variant="h2" sx={{ marginBottom: 3 }}>
        EduConnect
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Bienvenidos a EduConnect <br />
        la plataforma educativa.
      </Typography>
      
      <Link to="/login">
        <Typography variant="body1" color="primary" sx={{ textDecoration: 'underline', fontSize: '1.5rem' }}>
          Iniciar sesión
        </Typography>
      </Link>
    </Box>
  );
};

export default Inicio;
