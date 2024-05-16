import React from "react";
import { Avatar, Card, CardContent, Stack, Typography, Box, Button } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';import "../style/profile.css";

function Profile() {

  const handleBack = () => {
    window.history.back();
  }
  
  return (
    <Box className="profile-container">
      <Box className="cover-photo">
      <Button
        variant="contained"
        color="primary"
        startIcon={<ArrowBackIosNewIcon />}
        className="back-button"
        onClick={handleBack}
      >
        Retour
      </Button>
      </Box>
      <Button
        variant="contained"
        color="primary"
        startIcon={<EditIcon />}
        className="edit-profile-button"
      >
        Modifier le Profil
      </Button>
      <Stack direction="column" spacing={4} alignItems="center" justifyContent="center">
        <Box className="avatar-container">
          <Avatar alt="Profile Picture" className="profile-avatar-container">
            <AccountCircleIcon className="profile-avatar" />
          </Avatar>
        </Box>
        <Box className="profile-info">
          <Typography variant="h4" className="profile-title">Nom de l'utilisateur</Typography>
          <Typography variant="body1" className="profile-text">Adresse de livraison</Typography>
          <Typography variant="body2" className="profile-text">Descriptif</Typography>
        </Box>
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
          <Link to={`/cart`} style={{ textDecoration: 'none' }}>
            <Card className="profile-card">
              <CardContent>
                <ShoppingCartIcon className="profile-icon" />
                <Typography variant="body1" className="profile-card-text">Mon Panier</Typography>
              </CardContent>
            </Card>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Profile;
