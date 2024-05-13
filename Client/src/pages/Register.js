import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { TextField, Button, Stack, Typography } from "@mui/material";
import "../style/register.css";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        throw new Error("Les mots de passe ne correspondent pas.");
      }

      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      // Inscription réussie
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <Stack spacing={2} direction="row" className="signup-container">
      <item className="signup-form-container">
        <Stack direction="column" spacing={2} className="signup-form">
          <Typography variant="h5">Créez un compte</Typography>
          <TextField
            id="firstName"
            label="First Name"
            variant="outlined"
            className="text-field"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            id="lastName"
            label="Last Name"
            variant="outlined"
            className="text-field"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            className="text-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            className="text-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            variant="outlined"
            className="text-field"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Stack direction="row" spacing={2} className="login-button-container">
            <Button variant="contained" className="login-button" onClick={handleSubmit}>
              se connecter 
            </Button>
          </Stack>
          {errorMessage && (
            <Typography color="error">{errorMessage}</Typography>
          )}
        </Stack>
      </item>
      <item className="signup-right-container">
        <Stack direction="column" className="signup-right">
          <Typography variant="h5">Bon Retour !</Typography>
          <Typography variant="h6">
            Connectez vous a votre compte pour profiter de nos delicieux
            Burgers
          </Typography>
          <Link to="/login">
            <Button variant="contained" color="primary" className="login-register-button">
              S'inscrire
            </Button>
          </Link>
        </Stack>
      </item>
    </Stack>
  );
}

export default Register;
