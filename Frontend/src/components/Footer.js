import React from 'react';
import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#DCC097', padding: '100px 0px 50px 0px' }} pt={10}>
      <Container maxWidth="lg">
        <Grid container spacing={7}>
          <Grid item xs={12} md={3}>
            <Stack spacing={1}>
              <Typography variant="h6" gutterBottom color="white">
                Restaurant DreamWorld
              </Typography>
              <Link href="#" color="inherit" underline="none">
                Nos produits
              </Link>
              <Link href="#" color="inherit" underline="none">
                Nos Promotions
              </Link>
              <Link href="#" color="inherit" underline="none">
                Nos Horaires 
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack spacing={1}>
              <Typography variant="h6" gutterBottom color="white">
                Nos restaurants en France
              </Typography>
              <Link href="#" color="inherit" underline="none">
              Restaurant Dreamworld Angers              </Link>
              <Link href="#" color="inherit" underline="none">
              Restaurant Dreamworld Bordeaux
              </Link>
              <Link href="#" color="inherit" underline="none">
              Restaurant Dreamworld Paris
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack spacing={1}>
              <Typography variant="h6" gutterBottom color="white">
                Notre mission
              </Typography>
              <Link href="#" color="inherit" underline="none">
                Devenir franchisé
              </Link>
              <Link href="/Contact" color="inherit" underline="none">
                Contact
              </Link>
              <Link href="#" color="inherit" underline="none">
                Nous contacter
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack spacing={1}>
              <Typography variant="h6" gutterBottom color="white">
                Suivez-nous
              </Typography>
              <Link href="#" color="inherit" underline="none">
                Instagram
              </Link>
              <Link href="https://x.com/SteveNoumi" color="inherit" underline="none">
                Twitter
              </Link>
              <Link href="https://www.linkedin.com/in/steve-darius-nde-noumi-803099255/" color="inherit" underline="none">
                LinkedIn
              </Link>
            </Stack>
            </Grid>
        </Grid>
        <Box mt={10} textAlign="center" color="white">
          <Typography variant="body2">
            © Copyright 2023-2024 - Restaurant Dreamworld - Tous droits réservés
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">
              Mentions légales
            </Link>{' '}
            |{' '}
            <Link href="#" color="inherit" underline="none">
              Politique de protection des données personnelles
            </Link>
          </Typography>
          <Typography variant="body2" mt={2}>
            Pour votre santé, mangez au moins cinq fruits et légumes par jour.{' '}
            <Link href="http://www.mangerbouger.fr" color="inherit" underline="none">
              www.mangerbouger.fr
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
