import React, { useState, useEffect } from "react";
import { Avatar, Card, CardContent, Stack, Typography, Box, Button } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ProfileForm from "./ProfileForm";
import "../style/profile.css";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    last_name: " Enter Your Last Name",
    address: " Enter Your Address",
    first_name: " Enter Your Name",
    phone: " Enter Your Phone Number",
  });

  const handleBack = () => {
    window.history.back();
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error("No token found");
        }

        const response = await fetch("http://localhost:5000/profile/get-profile", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorMessage = `An error has occured: ${response.status} - ${response.statusText}`;
          throw new Error(errorMessage);
        }

        const data = await response.json();
        setUserData({
          first_name: data.first_name,
          last_name: data.last_name,
          address: data.address,
          phone: data.phone_number,
          photo: data.photo,
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  if (isEditing) {
    return <ProfileForm userData={userData} />;
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
        onClick={() => setIsEditing(true)}
      >
        Modifier le Profil
      </Button>
      <Stack direction="column" spacing={4} alignItems="center" justifyContent="center">
        <Box className="avatar-container">
          <Avatar alt="Profile Picture" 
          src= {userData.photo ? userData.photo : "profile.png"}
          className="profile-avatar-container">
          </Avatar>
        </Box>
        <Box className="profile-info">
          <Typography variant="h4" className="profile-title"> {userData.last_name} {userData.first_name}</Typography>
          <Typography variant="body1" className="profile-text"> Adresse : {userData.address} </Typography>
          <Typography variant="body2" className="profile-text"> N° de Téléphone : {userData.phone} </Typography>
          <Button startIcon={<EditIcon />} className="edit-password-button">Modifier mon mot de passe</Button>
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
