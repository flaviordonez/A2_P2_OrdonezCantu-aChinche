// src/components/Publicacion.tsx
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

interface PublicacionData {
  id: number;  // Agregar el campo id
  username: string;
  content: string;
  image?: string;
  comments: { username: string, content: string }[];  
}

interface PublicacionProps {
  onAddPost: (post: PublicacionData) => void;
}

const Publicacion: React.FC<PublicacionProps> = ({ onAddPost }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState<string | null>(null);
  
  const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const username = user.username || 'Usuario Anónimo';  // Si no hay usuario, 'Usuario Anónimo'
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string); // Convertir la imagen en base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (content.trim()) {
      const newPost: PublicacionData = {
        id: Date.now(),  // Usamos el timestamp como id único
        username,
        content,
        image: image || '', // Si no hay imagen, se guarda un string vacío
        comments: [], // Inicialmente sin comentarios
      };
      onAddPost(newPost); // Enviar la nueva publicación al componente padre (Dashboard)
      setContent(''); // Limpiar el contenido
      setImage(null); // Limpiar la imagen
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Crear Publicación
      </Typography>
      <TextField
        label="Escribe algo..."
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        sx={{ mb: 2 }}
      />
      <input type="file" onChange={handleImageChange} />
      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit} sx={{ mt: 2 }}>
        Publicar
      </Button>
    </Box>
  );
};

export default Publicacion;
