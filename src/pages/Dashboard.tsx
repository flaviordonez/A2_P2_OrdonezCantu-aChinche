// src/components/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import Publicacion from '../components/Publicacion';
import { useNavigate } from 'react-router-dom';

interface PublicacionData {
  username: string;
  content: string;
  image?: string;
  comments: { username: string, content: string }[];  // Cambiado a un objeto que incluye el nombre de usuario
}

const Dashboard: React.FC = () => {
  const [posts, setPosts] = useState<PublicacionData[]>([]);
  const [newComment, setNewComment] = useState('');
  const navigate = useNavigate(); // Para redirigir a otra página

  useEffect(() => {
    // Cargar las publicaciones desde localStorage al iniciar
    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    setPosts(savedPosts);
  }, []);

  const handleAddPost = (post: PublicacionData) => {
    const updatedPosts = [...posts, post];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts)); // Guardar las publicaciones en localStorage
  };

  const handleAddComment = (index: number) => {
    if (newComment.trim()) {
      const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
      const username = user.username || 'Usuario Anónimo'; // Si no hay usuario, 'Usuario Anónimo'

      const updatedPosts = [...posts];
      updatedPosts[index].comments.push({ username, content: newComment });
      setPosts(updatedPosts);
      localStorage.setItem('posts', JSON.stringify(updatedPosts)); // Guardar los comentarios en localStorage
      setNewComment(''); // Limpiar el campo de comentario
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser'); // Limpiar el usuario del localStorage
    navigate('/login'); // Redirigir al login después de cerrar sesión
  };

  // Función para redirigir a la página "Acerca de"
  const handleAboutRedirect = () => {
    navigate('/about');  // Redirige a "/about"
  };


  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 5 }}>
        <Button 
        variant="outlined" 
        color="secondary" 
        sx={{ position: 'absolute', top: 20, right: 200 }} 
        onClick={handleAboutRedirect}
      >
        Acerca de
      </Button>
      {/* Botón de Cerrar Sesión */}
      <Button 
        variant="outlined" 
        color="secondary" 
        sx={{ position: 'absolute', top: 20, right: 20 }} 
        onClick={handleLogout}
      >
        Cerrar Sesión
      </Button>

      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Publicacion onAddPost={handleAddPost} /> {/* Componente para agregar publicaciones */}

      <Box sx={{ mt: 5 }}>
        {posts.map((post, index) => (
          <Box key={index} sx={{ mb: 4, border: '1px solid #ddd', padding: 2, borderRadius: 2 }}>
            <Typography variant="h6">{post.username}</Typography> {/* Mostrar el nombre del usuario */}
            <Typography>{post.content}</Typography>
            {post.image && <img src={post.image} alt="Post" style={{ maxWidth: '100%', marginTop: 10 }} />}
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1">Comentarios:</Typography>
              {post.comments.map((comment, i) => (
                <Typography key={i} sx={{ ml: 2, fontStyle: 'italic' }}>
                  <strong>{comment.username}:</strong> {comment.content}
                </Typography>
              ))}
              <TextField
                label="Agregar comentario"
                variant="outlined"
                fullWidth
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                sx={{ mt: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 1 }}
                onClick={() => handleAddComment(index)}
              >
                Comentar
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
