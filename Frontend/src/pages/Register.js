import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { TextField, Button, Stack, Typography } from "@mui/material";
import "../style/register.css";

function register() {
  const handleBack = () => {
    window.history.back();    
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
              <TextField
                id="outlined-basic"
                label="Entrez votre Email ..."
                variant="outlined"
                className="text-field-register"
              />
            </item>
            <item>
              <Typography variant="body" className="register-right-body">
                {" "}
                Confirmation du mot de passe :{" "}
              </Typography>
              <TextField
                id="outlined-basic"
                label="Entrez votre mot de passe ..."
                variant="outlined"
                className="text-field-register"
              />
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

export default register;
