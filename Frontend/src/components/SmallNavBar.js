import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Stack, Select, MenuItem } from '@mui/material'; // Import Select et MenuItem
import "../style/smallnavbar.css";

function SmallNavBar({ handleClick, selectedItem, handleSortChange }) {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products/categories`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setNavItems(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des catégories:', error);
      });
  }, []);

  return (
    <Box className="smallnavbar-container">
      <Stack component="nav" justifyContent="center">
        <Toolbar>
          <IconButton
            color="inherit"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.category_id}
                onClick={() => handleClick(item)}
                className={(selectedItem === item) ? "smallnavbar-cliqued" : "smallnavbar-text"}
              >
                {item.category_name}
              </Button>
            ))}
          </Box>
          <Select
            className='smallnavbar-selected'
            defaultValue=""
            onChange={(e) => handleSortChange(e.target.value)}
            displayEmpty
            sx={{ ml: 2 }}
            size='small'
          >
            <MenuItem value="">
              <em>Trier les produits</em>
            </MenuItem>
            <MenuItem value="asc">Prix croissant</MenuItem>
            <MenuItem value="desc">Prix décroissant</MenuItem>
            <MenuItem value="rating">Meilleures notes</MenuItem> {/* Ajouter cette ligne */}
          </Select>
        </Toolbar>
      </Stack>
    </Box>
  );
}

export default SmallNavBar;
