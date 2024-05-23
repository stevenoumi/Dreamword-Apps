// src/components/CommentForm.js
import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const CommentForm = ({ burgerId, onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!comment.trim()) {
      return;
    }
    if (!burgerId) {
      console.error("Burger ID is undefined");
      return;
    }
    onSubmit(comment); 
    setComment('');
  };
  

  return (
    <Box component="form" onSubmit={handleSubmit} className='burgeritem-commentform'>
      <TextField
        fullWidth
        label="Laisser un commentaire"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        variant="outlined"
        multiline
        rows={2}
      />
      <Button type="submit" variant="contained" className='burgeritem-commentform-button'>
        Soumettre
      </Button>
    </Box>
  );
};

export default CommentForm;
