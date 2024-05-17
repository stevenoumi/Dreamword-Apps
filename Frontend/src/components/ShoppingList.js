import React, { useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Box, Stack } from '@mui/material';
import ShoppingItems from './ShoppingItems';
import { CartContext } from "../context/CartContext";
import { FavoriteContext } from '../context/FavoriteContext';
import "../style/shoppingList.css";

function ShoppingList({ productsList}) {
    const { addToCart } = useContext(CartContext);
    const { addToFavorite } = useContext(FavoriteContext);
    

    return (
        <Box className="shopping-list-container">
            <Stack spacing={2} direction="row" justifyContent="center">
            </Stack>
            <Grid container spacing={2}>
                {productsList.map((item) => ( 
                    <Grid item xs={12} md={3} key={item.id}>
                        <ShoppingItems item={item} addToCart={addToCart} addToFavorite={addToFavorite} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ShoppingList;
