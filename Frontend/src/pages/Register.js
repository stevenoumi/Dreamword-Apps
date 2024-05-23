import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { TextField, Button, Stack, Typography } from "@mui/material";
import "../style/register.css";
import PasswordField from "../components/PassWordField";

function Register() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nom, prenom, email, password }),
      });
      const data = await response.json();
      console.log(data); // Vous pouvez gérer la réponse ici
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleBack = () => {
    window.location.href = "/";
  }

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
      <Stack spacing={2} direction="row" className="register-container">
        <item className="register-form-container">
          <Stack direction="column" spacing={2} className="register-form">
            <Typography variant="h5">
              {" "}
              Welcome back dear DreamWorld Lovers !{" "}
            </Typography>
            <Typography variant="h6" className="register-form-body">
              {" "}
              Connectez-vous pour profiter d'une expérience unique avec des
              Burgers encore plus délicieux !{" "}
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
        </item>
        <item className="register-right-container">
          <Stack direction="column" spacing={1} className="register-right">
            <item>
              <Typography variant="h5" className="register-right-h5">
                {" "}
                Creez votre compte{" "}
              </Typography>
            </item>
            <item>
              <Stack direction="row" spacing={2}>
                <item>
                  <Stack direction="column">
                    <Typography variant="body" className="register-right-body">
                      {" "}
                      Nom :{" "}
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      label="Entrez votre nom ..."
                      variant="outlined"
                      className="text-field-register"
                    />
                  </Stack>
                </item>
                <item>
                  <Stack direction="column">
                    <Typography variant="body" className="register-right-body">
                      {" "}
                      Prenom :{" "}
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      label="Entrez votre prenom ..."
                      variant="outlined"
                      className="text-field-register"
                    />
                  </Stack>
                </item>
              </Stack>
            </item>
            <item>
              <Stack direction="row" spacing={2}>
                <item>
                  <Stack direction="column">
                    <Typography variant="body" className="register-right-body">
                      {" "}
                      Email :{" "}
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      label="Entrez votre Email ..."
                      variant="outlined"
                      className="text-field-register"
                    />
                  </Stack>
                </item>
                <item>
                  <Stack direction="column" >
                    <Typography variant="body" className="register-right-body">
                      {" "}
                      Portable :{" "}
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      label="Entrez votre portable ..."
                      variant="outlined"
                      className="text-field-register"
                    />
                  </Stack>
                </item>
              </Stack>
            </item>
            <item>
              <Typography variant="body" className="register-right-body">
                {" "}
                Mot de passe :{" "}
              </Typography>
              <PasswordField />
            </item>
            <item>
              <Typography variant="body" className="register-right-body">
                {" "}
                Confirmation du mot de passe :{" "}
              </Typography>
              <PasswordField />
            </item>
            <item>
              <Stack
                direction="row"
                spacing={2}
                className="register-button-container"
              >
                <Button variant="contained" className="register-button-submit">
                  s'inscrire
                </Button>
              </Stack>
            </item>
          </Stack>
        </item>
      </Stack>
    </>
  );
}

export default Register;
