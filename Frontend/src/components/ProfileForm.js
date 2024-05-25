import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ProfileIcon from "@mui/icons-material/Person";
import "../style/profileForm.css";

function ProfileForm({ userData }) {
  const [profile, setProfile] = useState({
    name: userData.first_name,
    last_name: userData.last_name,
    address: userData.address,
    phone: userData.phone,
    billing_information: userData.billing_information,
    shipping_address: userData.shipping_address,
    photo: userData.photo ? userData.photo : "profile.png",
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, photo: URL.createObjectURL(file) });
      setSelectedFile(file);
    }
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('name', profile.name);
      formData.append('last_name', profile.last_name);
      formData.append('address', profile.address);
      formData.append('phone_number', profile.phone);
      formData.append('billing_information', profile.billing_information);
      formData.append('shipping_address', profile.shipping_address);
      if (selectedFile) {
        formData.append('image', selectedFile);
      }

      const response = await fetch("http://localhost:5000/profile/update-profile", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        window.location.href = "/profile";
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box className="profileform-container">
      <Button
        className="profileform-back-button"
        startIcon={<ArrowBackIosNewIcon />}
        onClick={() => window.history.back()}
      >
        Retourner au profil
      </Button>
      <Box className="profile-form-container">
        <Typography variant="h4" className="profile-form-title">
          Modifier Votre Profil
        </Typography>
        <Stack direction="column" spacing={1.5} className="profileform-avatar-container">
          <div className="profile-avatar">
            <Avatar
              alt="Profile Picture"
              src={profile.photo ? profile.photo : "profile.png"}
              sx={{ width: 100, height: 100, bgcolor: "black"}}
            >
              {!profile.photo && <ProfileIcon className="menu-icon" />}
            </Avatar>
          </div>
          <div>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="upload-photo"
              type="file"
              onChange={handlePhotoChange}
            />
          </div>
          <div>
            <label htmlFor="upload-photo">
              <Button
                variant="contained"
                component="span"
                className="profile-form-button"
                startIcon={<PhotoCamera />}
              >
                Changer Photo
              </Button>
            </label>
          </div>

          <TextField
            label="Nom"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Prénom"
            name="last_name"
            value={profile.last_name}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Adresse"
            name="address"
            value={profile.address}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Téléphone"
            name="phone"
            value={profile.phone}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Informations de facturation"
            name="billing_information"
            value={profile.billing_information}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Adresse de livraison"
            name="shipping_address"
            value={profile.shipping_address}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
          />
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={handleSave}
            className="profile-form-button"
          >
            Sauvegarder
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default ProfileForm;
