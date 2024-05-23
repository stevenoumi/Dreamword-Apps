import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ajout de l'importation manquante
import { TextField, Button, Stack, Typography } from "@mui/material";
import "../style/login.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PasswordField from "../components/PassWordField.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ArrowBackIosNewIcon />}
        className="auth-back-button"
        onClick={handleBack}
      >
        Retour A l'accueil
      </Button>
      <Stack spacing={2} direction="row" className="login-container">
        {/* Section de connexion */}
        <div className="login-form-container">
          <Stack direction="column" spacing={2} className="login-form">
            <Typography variant="h5">Hello Dear DreamWorld Lovers!</Typography>
            <Typography variant="h6" className="login-form-body">
              Si vous n'avez pas encore de compte c'est l'occasion de nous rejoindre pour encore plus de Burgers
            </Typography>
            {errorMessage && <Typography variant="body" color="error">{errorMessage}</Typography>}
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                component={Link}
                to="/register"
                className="register-button"
              >
                s'inscrire
              </Button>
            </Stack>
          </Stack>
        </div>
        {/* Section de formulaire de connexion */}
        <div className="login-right-container">
          <Stack direction="column" spacing={2} className="login-right">
            <Typography variant="h5" className="login-right-h5">Connectez-vous</Typography>
            <Typography variant="body" className="login-right-body">Email :</Typography>
            <TextField
              id="outlined-basic"
              label="Entrez votre Email..."
              variant="outlined"
              className="text-field-register"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Typography variant="body" className="login-right-body">Password :</Typography>
            <PasswordField className="text-field-register" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Stack direction="row" spacing={2} className="login-button-container">
              <Button variant="contained" className="login-button-submit" onClick={handleLogin}>
                se connecter
              </Button>
            </Stack>
          </Stack>
        </div>
      </Stack>
    </>
  );
}

export default Login;
