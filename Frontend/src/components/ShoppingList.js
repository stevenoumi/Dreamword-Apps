import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import { Box, Stack } from '@mui/material';
import ShoppingItems from './ShoppingItems';
import { CartContext } from "../context/CartContext";
import { FavoriteContext } from '../context/FavoriteContext';
import "../style/shoppingList.css";

function ShoppingList({ productsList , selectedItem}) {
    console.log("productsList in ShoppingList:", productsList);
    const { addToCart } = useContext(CartContext);
    const { addToFavorite } = useContext(FavoriteContext);
    
    return (
        <Box className="shopping-list-container">
            < Stack  direction="row" justifyContent="center">
                <h1 className="shopping-list-title">{selectedItem}</h1>
            </Stack>
            <Stack spacing={2} direction="row" justifyContent="center">
            </Stack>
            <Grid container spacing={2}>        
                {productsList.map((item) => ( 

                    <Grid item xs={12} md={3} key={item.id}>
                        <ShoppingItems item={item} addToCart={addToCart} addToFavorite={addToFavorite} key={item.id} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ShoppingList;
