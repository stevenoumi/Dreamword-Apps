import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Stack, Typography } from "@mui/material";
import "../style/login.css";

function Login() {
  return (
    <Stack spacing={2} direction="row" className="signup-container">
      <item className="signup-right-container">
        <Stack direction="column" className="signup-right">
          <Typography variant="h5"> Hello Dear DreamWorld lovers! </Typography>
          <Typography variant="h6">
            {" "}
            Si vous n'avez pas encore de compte c'est le moment de nous
            rejoindre pour encore plus de folie!
          </Typography>
          <Link to="/register" >
            <Button variant="outlined" className="login-register-button"> 
              s'incrire
            </Button>
          </Link>
        </Stack>
      </item>
      <item className="signup-form-container">
        <Stack direction="column" spacing={2} className="signup-form">
          <Typography variant="h5">Connectez-vous </Typography>

          <TextField id="outlined-basic" label="Email" variant="outlined" className="text-field" />
          <TextField id="outlined-basic" label="Password" variant="outlined" className="text-field" />
          <Stack direction="row" spacing={2} className="login-button-container">
            <Button variant="contained" className="login-button">
              se connecter
            </Button>
          </Stack>
        </Stack>
      </item>
    </Stack>
  );
}

export default Login;
