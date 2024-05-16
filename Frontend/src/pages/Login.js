import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Stack, Typography } from "@mui/material";
import "../style/login.css";
import Header from "../components/Header";

function Login() {
  return (
    <>
      <Header />
      <Stack spacing={2} direction="row" className="login-container">
        <item className="login-form-container">
          <Stack direction="column" spacing={2} className="login-form">
            <Typography variant="h5">
              {" "}
              Hello Dear DreamWorld Lovers !{" "}
            </Typography>
            <Typography variant="h6" className="login-form-body">
              {" "}
              Si vous n'avez pas encore de compte c'est l'ocasion de nous
              rejoindre pour encore plus de Burgers
            </Typography>
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
        </item>
        <item className="login-right-container">
          <Stack direction="column" spacing={2} className="login-right">
            <Typography variant="h5" className="login-right-h5">Connectez-vous </Typography>
            <Typography variant="body" className="login-right-body">
              {" "}
              Email :{" "}
            </Typography>
            <TextField
              id="outlined-basic"
              label="Entrez votre Email ..."
              variant="outlined"
              className="text-field-register"
            />
            <Typography variant="body" className="login-right-body">
              {" "}
              Password :{" "}
            </Typography>
            <TextField
              id="outlined-basic"
              label="Entrez votre mot de passe ..."
              variant="outlined"
              className="text-field-register"
            />
            <Stack
              direction="row"
              spacing={2}
              className="login-button-container"
            >
              <Button variant="contained" className="login-button-submit">
                se connecter
              </Button>
            </Stack>
          </Stack>
        </item>
      </Stack>
    </>
  );
}

export default Login;
