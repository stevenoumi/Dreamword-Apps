// SmallNavBar.js
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import "../style/smallnavbar.css";
import { Stack } from '@mui/material';

const navItems = ['Nos menus', ' Nos burgers', 'Nos boissons', 'Nos desserts'];

function SmallNavBar({ handleClick, selectedItem}) {


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
              <Button key={item} onClick={() => handleClick(item)} className={(selectedItem === item)? "smallnavbar-cliqued" : "smallnavbar-text"}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Stack>
    </Box>
  );
}

export default SmallNavBar;
