import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { CardMedia, Stack, IconButton, Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "../style/OrederItems.css";
import { OrederContext } from "../context/OrederContext";
import { CartContext } from "../context/CartContext";

function OrederItems({ item }) {

  const { removeFromOreder } = useContext(OrederContext);
  const { addToCart } = useContext(CartContext);
  return (
    <Box className="Oreder-item">
      <Grid container spacing={1}>
        <Grid item>
          <ButtonBase>
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              className="Oreder-item-image"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container alignItems="center">
          <Typography
            variant="h6"
            component="div"
            className="Oreder-item-title"
          >
            {item.title}
          </Typography>
        </Grid>
        <Grid item className="Oreder-item-price">
          <Typography variant="h5" component="div">
            {item.price} €
          </Typography>
        </Grid>
        <Grid item className="Oreder-item-infos">
          <Stack direction="column"  spacing={1}alignItems="center">
            <item>
                <Typography 
                variant="subtitle1" 
                component="div">
                  Ajouté le {item.dateAdded}
                </Typography>
            </item>
            <item>
              <Button 
              variant="contained" 
              color="inherit"
              onClick={() => addToCart(item)} 
              className="Oreder-item-add-to-cart-button"
               >
                Ajouter au panier
              </Button>
            </item>
            </Stack>
        </Grid>
        <Grid item className="Oreder-item-delete-button">
            <IconButton
            onClick={() => removeFromOreder(item.id)}
            >
                <DeleteIcon />
            </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OrederItems;
