import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate(); // Para redirigir a otra página

  const handleLogout = () => {
    localStorage.removeItem('currentUser'); // Limpiar el usuario del localStorage
    navigate('/login'); // Redirigir al login después de cerrar sesión
  };

  const handleGoBack = () => {
    navigate(-1); // Volver atrás en el historial
  };

  return (
    <Box sx={{ textAlign: 'center', marginTop: 5 }}>
      {/* Botón para volver atrás */}
      <Button
        variant="outlined"
        onClick={handleGoBack}
        sx={{
          position: 'absolute',
          top: 20,
          left: 20,
          mb: 4,
          border: '1px solid #ddd',
          padding: 2,
          borderRadius: 2,
        }}
      >
        Volver atrás
      </Button>

      {/* Botón de Cerrar sesión */}
      <Button
        color="inherit"
        onClick={handleLogout}
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          mb: 4,
          border: '1px solid #ddd',
          padding: 2,
          borderRadius: 2,
        }}
      >
        Cerrar sesión
      </Button>

      <Typography variant="h3" sx={{ marginBottom: 3 }}>
        Educonnect
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: 3 }}>
        Integrantes:
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 1 }}>
        - Flavio Ordoñez
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 1 }}>
        - Eduardo Cantuña
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 3 }}>
        - Pool Chinche
      </Typography>
    </Box>
  );
};

export default About;
