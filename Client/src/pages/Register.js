import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Stack, Typography } from "@mui/material";
import "../style/register.css";

function Register() {
  return (
    <Stack spacing={2} direction="row" className="signup-container">
      <item className="signup-form-container">
        <Stack direction="column" spacing={2} className="signup-form">
          <Typography variant="h5">Creez un compte </Typography>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
          />
          <Button variant="contained" color="primary">
            Sign Up
          </Button>
        </Stack>
      </item>
      <item className="signup-right-container">
        <Stack direction="column" className="signup-right">
          <Typography variant="h5"> Bon Retour ! </Typography>
          <Typography variant="h6">
            {" "}
            Connectez vous a votre compte pour profiter de nos delicieux Burgers
          </Typography>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Sign In
            </Button>
          </Link>
        </Stack>
      </item>
    </Stack>
  );
}

export default Register;
