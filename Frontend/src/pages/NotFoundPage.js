import React from 'react';
import '../style/notFoundPage.css'; // Assurez-vous que ce fichier CSS existe
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const NotFoundPage = () => {
    return (
        <Stack spacing={1} className="page-not-found">
            <h1>404</h1>
            
            <img src="lols.png" alt="Burger" />
            <h4> Burger not found </h4>

            <p>Oh non! Tu as perdu ton chemin vers notre menu de burgers délicieux.</p>
            <Button className='page-not-found-button' component={Link} to="/">Retourner au menu principal</Button>
        </Stack>
    );
};

export default NotFoundPage;
