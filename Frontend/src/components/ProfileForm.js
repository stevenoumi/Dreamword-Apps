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

function ProfileForm() {
  const [profile, setProfile] = useState({
    name: "Francis Dupont",
    address: "61 boulevard gaston",
    phone: "+33 6 34 34 19 18",
    photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, photo: URL.createObjectURL(file) });
    }
  };

  const handleSave = () => {
    // Logic to save the updated profile details
    console.log("Profile saved:", profile);
  };

  return (
    <Box className="profileform-container">
      <Button
        className="profileform-back-button"
        startIcon={<ArrowBackIosNewIcon />}
        onClick={() => window.history.back()}
      >
        Retourner au profile  
      </Button>
      <Box className="profile-form-container">
        <Typography variant="h4" className="profile-form-title">
          Modifier Votre Profil
        </Typography>
        <Stack direction="column" spacing={3} className="avatar-container">
          <div className="profile-avatar">
            <Avatar
              alt="Profile Picture"
              src={profile.photo? profile.photo : "profile.png"}
              sx={{ width: 100, height: 100 }}
              borderRadius="50%"
              border={2}
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
