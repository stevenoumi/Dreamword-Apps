import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PasswordField from "../components/PassWordField"; 
import { TextField, Button, Stack, Typography } from "@mui/material";
import "../style/register.css";

function Register() {
  const [last_name, setLast_name] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setErrorMessage("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          last_name,
          first_name: prenom,
          email,
          password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        window.location.href = "/login";
      } else {
        setErrorMessage(data.error || "Une erreur est survenue");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Erreur de connexion au serveur");
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
        Retour à l'accueil
      </Button>
      <Stack spacing={2} direction="row" className="register-container">
        <div className="register-form-container">
          <Stack direction="column" spacing={2} className="register-form">
            <Typography variant="h5">
              Welcome back dear DreamWorld Lovers!
            </Typography>
            <Typography variant="h6" className="register-form-body">
              Connectez-vous pour profiter d'une expérience unique avec des
              Burgers encore plus délicieux!
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                component={Link}
                to="/login"
                className="register-login-button"
              >
                Se connecter
              </Button>
            </Stack>
          </Stack>
        </div>
        <div className="register-right-container">
          <Stack direction="column" spacing={1} className="register-right">
            <Typography variant="h5" className="register-right-h5">
              Créez votre compte
            </Typography>
            <Stack direction="row" spacing={2}>
              <Stack direction="column">
                <Typography variant="body" className="register-right-body">
                  Nom d'utilisateur :
                </Typography>
                <TextField
                  id="last_name"
                  label="Entrez votre nom d'utilisateur..."
                  variant="outlined"
                  className="text-field-register"
                  value={last_name}
                  onChange={(e) => setLast_name(e.target.value)}
                />
              </Stack>
              <Stack direction="column">
                <Typography variant="body" className="register-right-body">
                  Prénom :
                </Typography>
                <TextField
                  id="prenom"
                  label="Entrez votre prénom..."
                  variant="outlined"
                  className="text-field-register"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                />
              </Stack>
            </Stack>
            <Stack direction="column">
              <Typography variant="body" className="register-right-body">
                Email :
              </Typography>
              <TextField
                id="email"
                label="Entrez votre Email..."
                variant="outlined"
                className="text-field-register"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Stack>
            <Typography variant="body" className="register-right-body">
              Mot de passe :
            </Typography>
            <PasswordField
              id="password"
              label="Entrez votre mot de passe..."
              variant="outlined"
              type="password"
              className="text-field-register"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Typography variant="body" className="register-right-body">
              Confirmation du mot de passe :
            </Typography>
            <PasswordField
              id="confirmPassword"
              label="Confirmez votre mot de passe..."
              variant="outlined"
              type="password"
              className="text-field-register"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errorMessage && (
              <Typography variant="body" color="error">
                {errorMessage}
              </Typography>
            )}
            <Stack
              direction="row"
              spacing={2}
              className="register-button-container"
            >
              <Button
                variant="contained"
                className="register-button-submit"
                onClick={handleRegister}
              >
                S'inscrire
              </Button>
            </Stack>
          </Stack>
        </div>
      </Stack>
    </>
  );
}

export default Register;
