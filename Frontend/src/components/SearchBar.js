import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function SearchBar({ onSearch }) {
  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        fullWidth
        label="Rechercher des produits"
        variant="outlined"
        onChange={(e) => onSearch(e.target.value)}
      />
    </Box>
  );
}

export default SearchBar;
