import { Button, Checkbox, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import "../style/contact.css";

function Contact() {
  return (
    <div>
      <Stack spacing={2} direction="column">
        <item className="contact-title">
        <Typography variant="h1" color="white">CONTACTEZ- </Typography>
        <Typography variant="h1" color="#DCC097">NOUS</Typography>
        </item>
        <item className="contact-info">
          <Typography variant="h4"  fontWeight="bold"className="contact-info-element" >Besoin d'informations ? </Typography>
          <Typography variant="subtitle1"  className="contact-info-element">Envoyez-nous un message rapidement au</Typography>
          <Typography variant="h4"  className="contact-info-element" fontWeight="bold">06 12 34 56 78</Typography>
          <Typography variant="h7" className="contact-info-element">Nous vous répondrons très rapidement.</Typography>
        </item>
        <item>
        <Stack spacing={2} direction="row" className="contact-field-container">
        <item className="contact-form-container">
          <Stack direction="column" spacing={5} className="contact-form">
            <item>
            <Typography variant="h1">
              {" "}
              DreamWorld
              {" "}
            </Typography>
              </item>
            <item>
            <Typography variant="h5" className="contact-form-body">
              {" "}
              55 rue Saint Laud 
              49100 Angers 
              {" "}
            </Typography>
            <Typography variant="h4" className="contact-form-body">
              {" "}
              02 41 88 99 00
              {" "}
            </Typography>
            </item>
            <item>
            <Typography variant="h5" className="contact-form-body">
              {" "}
              Eco parc du buisson 49070 Beaucouzé
              {" "}
            </Typography>
            <Typography variant="h4" className="contact-form-body">
              {" "}
              02 41 88 99 00
              {" "}
            </Typography>
            </item>
            <item>
            <Typography variant="h5" className="contact-form-body">
              {" "}
              Suivez-nous sur les réseaux 
              {" "}
            </Typography>
            <Typography variant="h4" className="contact-form-body">
              <InstagramIcon/>  <FacebookIcon/>  <TwitterIcon/>  <LinkedInIcon/> 
            </Typography>
            </item>
            
          </Stack>
        </item>
        <item>
          
        </item>
        <item className="contact-right-container">
          <Stack direction="column" spacing={1} className="contact-right">
         
            <item>
              <Stack direction="row" spacing={2}>
                <item>
                  <Stack direction="column">
                    <TextField
                      id="outlined-basic"
                      label="Nom de famille"
                      variant="outlined"
                      className="text-field-contact"
                    />
                  </Stack>
                </item>
                <item>
                  <Stack direction="column">
                    <TextField
                      id="outlined-basic"
                      label="votre prénom"
                      variant="outlined"
                      className="text-field-contact"
                    />
                  </Stack>
                </item>
              </Stack>
            </item>
            <item>
              <TextField
                id="outlined-basic"
                label="Votre adresse email"
                variant="outlined"
                className="text-field-contact"
              />
            </item>
            <item>
              <TextField
                id="outlined-basic"
                label="Objet de la demande"
                variant="outlined"
                className="text-field-contact"
              />
            </item>
            <item>
              <TextField
                id="outlined-basic"
                label="votre message"
                variant="outlined"
                className="text-field-contact"
                rows={4}
                multiline
              />
            </item>
            <item>
              <Stack
                direction="row"
                spacing={2}
                className="contact-button-container"
              >
                <item>
                  <Checkbox color="primary" className="checkbox-contact " />
                </item>
                <item>
                  <Typography variant="subtitle1" className="contact-conditions">
                   En cliquant sur ce bouton  J'accepte les conditions générales d'utilisation
                  </Typography>
                </item>
                <Button variant="contained" className="contact-button-submit">
                  Envoyer
                  <ArrowForwardIosIcon/>
                </Button>
              </Stack>
            </item>
          </Stack>
        </item>
      </Stack>
        </item>

      </Stack>
    </div>
  );
}

export default Contact;