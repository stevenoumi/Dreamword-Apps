import React from "react";
import { Avatar, Card, CardContent, CardMedia, Stack, Typography, Box } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../style/profile.css"; 
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Profile() {
  return (
    <Box className="profile-container">
      <Stack className="cover-photo">
        <CardMedia
          component="img"
          alt="Cover Photo"
          height="200"
          image="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
          className="cover-photo"
        />
      </Stack>
      <Stack className="avatar-container">
        <Avatar alt="Profile Picture"  className="profile-avatar-container" >
        <AccountCircleIcon  className="profile-avatar"/>
        </Avatar>
      </Stack>
      <Stack className="profile-info">
        <Typography variant="h4" className="profile-title">Nom de l'utilisateur</Typography>
        <Typography variant="body1" className="profile-text">Adresse de livraison</Typography>
        <Typography variant="body2" className="profile-text">Descriptif</Typography>
      </Stack>
      <Stack direction="row" spacing={2} className="profile-stack">
      <Link to={`/favorites`} style={{ textDecoration: 'none' }}>
        <Card className="profile-card">
        
          <CardContent>
            <FavoriteIcon className="profile-icon" />
            <Typography variant="body1" className="profile-card-text">Mes Favoris</Typography>
          </CardContent>
        </Card>
        </Link>
        <Link to={`/orders`} style={{ textDecoration: 'none' }}>
        <Card className="profile-card">
        
          <CardContent>
            <ShoppingCartIcon className="profile-icon" />
            <Typography variant="body1" className="profile-card-text">Mes Commandes</Typography>
          </CardContent>
        </Card>
        </Link>
      
      </Stack>
    </Box>
  );
}

export default Profile;
