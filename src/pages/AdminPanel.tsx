// src/pages/AdminPanel.tsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, Tab, Tabs, Container, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminPanel: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [users, setUsers] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const navigate = useNavigate();

  // Cargar usuarios y publicaciones del localStorage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    setUsers(storedUsers);
    setPosts(storedPosts);
  }, []);

  function handleTabChange(_event: React.SyntheticEvent, newTabIndex: number) {
    setTabIndex(newTabIndex);
  }

  function handleDeleteUser(username: string) {
    if (window.confirm(`¿Estás seguro de eliminar al usuario ${username}?`)) {
      const updatedUsers = users.filter(user => user.username !== username);
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }
  }

  const handleDeletePost = (postId: number) => {
    // Eliminar la publicación con el id específico
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

    // Función para redirigir a la página "Acerca de"
    const handleAboutRedirect = () => {
      navigate('/about');  // Redirige a "/about"
    };

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
        <Typography variant="h6">Panel Admin</Typography>
        <Button 
                variant="outlined" 
                color="secondary"                 
                onClick={handleAboutRedirect}
              >
                Acerca de
              </Button>
        <Button color="inherit" onClick={handleLogout}>Cerrar sesión</Button>
        
      </Box>
      

      <Tabs value={tabIndex} onChange={handleTabChange} sx={{ marginTop: 2 }}>
        <Tab label="Usuarios" />
        <Tab label="Publicaciones" />
      </Tabs>

      {tabIndex === 0 && (
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6">Usuarios Registrados</Typography>
          <List>
            {users.map((user) => (
              <ListItem key={user.username}>
                <ListItemText primary={user.username} secondary={user.role} />
                {user.role !== 'admin' && (
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDeleteUser(user.username)}
                  >
                    Eliminar
                  </Button>
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {tabIndex === 1 && (
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6">Publicaciones</Typography>
          <List>
            {posts.map((post) => (
              <ListItem key={post.id} sx={{ marginBottom: 2 }}>
                <Card sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  {/* Verificar si la publicación tiene imagen */}
                  {post.image && (
                    <CardMedia
                      component="img"
                      height="200"
                      image={post.image}  // Aquí es donde se usa el valor de base64
                      alt="Imagen de la publicación"
                      sx={{ objectFit: 'cover' }}
                    />
                  )}
                  <CardContent>
                    <ListItemText
                      primary={post.content}
                      secondary={`Creado por: ${post.username}`}
                    />
                  </CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 1 }}>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDeletePost(post.id)}  // Ahora se usa el id único de la publicación
                    >
                      Eliminar
                    </Button>
                  </Box>
                </Card>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Container>
  );
};

export default AdminPanel;
