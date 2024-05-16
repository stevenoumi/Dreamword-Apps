import React, { useState } from "react";
import { TextField, Button, Stack, Typography } from "@mui/material";
import axios from 'axios';
import "../style/register.css";
import Header from "../components/Header";

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    firstname: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phoneNum: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      alert(response.data);
    } catch (error) {
      console.error(error);
      alert('Error registering user');
    }
  };

  return (
    <>
      <Header />
      <Stack spacing={2} direction="row" className="register-container">
        <div className="register-form-container">
          <form onSubmit={handleSubmit}>
            <Stack direction="column" spacing={2} className="register-form">
              <Typography variant="h5">
                Welcome back dear DreamWorld Lovers!
              </Typography>
              <Typography variant="h6" className="register-form-body">
                Connectez-vous pour profiter d'une expérience unique avec des
                Burgers encore plus délicieux!
              </Typography>
              <TextField
                label="Nom"
                name="name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                className="text-field-register"
              />
              <TextField
                label="Prenom"
                name="firstname"
                variant="outlined"
                value={formData.firstname}
                onChange={handleChange}
                className="text-field-register"
              />
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                className="text-field-register"
              />
              <TextField
                label="Portable"
                name="phoneNum"
                variant="outlined"
                value={formData.phoneNum}
                onChange={handleChange}
                className="text-field-register"
              />
              <TextField
                label="Mot de passe"
                type="password"
                name="password"
                variant="outlined"
                value={formData.password}
                onChange={handleChange}
                className="text-field-register"
              />
              <TextField
                label="Confirmation du mot de passe"
                type="password"
                name="confirmPassword"
                variant="outlined"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="text-field-register"
              />
              <Button type="submit" variant="contained" className="register-button-submit">
                S'inscrire
              </Button>
            </Stack>
          </form>
        </div>
      </Stack>
    </>
  );
}

export default Register;
