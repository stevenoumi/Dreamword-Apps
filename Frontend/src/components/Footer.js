import React from 'react';
import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#DCC097', padding: '40px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Stack spacing={1}>
              <Typography variant="h6" gutterBottom color="white">
                Restaurant DreamWorld
              </Typography>
              <Link href="#" color="inherit" underline="none">
                Notre histoire
              </Link>
              <Link href="#" color="inherit" underline="none">
                Nos produits
              </Link>
              <Link href="#" color="inherit" underline="none">
                Nos Burgers
              </Link>
              <Link href="#" color="inherit" underline="none">
                Nos Boissons
              </Link>
              <Link href="#" color="inherit" underline="none">
                Nos Desserts
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack spacing={1}>
              <Typography variant="h6" gutterBottom color="white">
                Nos 2 restaurants à Angers
              </Typography>
              <Link href="#" color="inherit" underline="none">
                Centre Ville à Angers
              </Link>
              <Link href="#" color="inherit" underline="none">
                C.C. Atoll à Beaucouzé
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack spacing={1}>
              <Typography variant="h6" gutterBottom color="white">
                Recrutement
              </Typography>
              <Link href="#" color="inherit" underline="none">
                Rejoignez nos équipes
              </Link>
              <Link href="#" color="inherit" underline="none">
                Officiel
              </Link>
              <Link href="#" color="inherit" underline="none">
                Manager
              </Link>
              <Link href="#" color="inherit" underline="none">
                Assistant manager
              </Link>
              <Link href="#" color="inherit" underline="none">
                Étudiant
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
              <Link href="#" color="inherit" underline="none">
                Contact
              </Link>
              <Link href="#" color="inherit" underline="none">
                Nous contacter
              </Link>
              <Typography variant="h6" gutterBottom color="white" sx={{ marginTop: '16px' }}>
                Suivez-nous
              </Typography>
              <Link href="#" color="inherit" underline="none">
                Instagram
              </Link>
              <Link href="#" color="inherit" underline="none">
                Facebook
              </Link>
              <Link href="#" color="inherit" underline="none">
                LinkedIn
              </Link>
            </Stack>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center" color="white">
          <Typography variant="body2">
            © Copyright 2021-2022 - Restaurant MADE - Tous droits réservés
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
