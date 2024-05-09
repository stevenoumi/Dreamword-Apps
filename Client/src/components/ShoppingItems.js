import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "../style/shoppingItems.css";
import { Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../context/CartContext";
import { FavoriteContext } from "../context/FavoriteContext";

function ShoppingItems({ item }) {
  const { addToCart } = useContext(CartContext);
  const { favoriteItems, addToFavorite, removeFromFavorite } = useContext(FavoriteContext);

  const isFavorite = favoriteItems.some(favoriteItem => favoriteItem.id === item.id);
  
  const handleFavorite = () => {
    if (isFavorite) {
      removeFromFavorite(item.id);
    } else {
      addToFavorite(item);
    }
  };
  
  return (
    <Card className="shoppingItems-container">
      <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none' }}>

      <CardMedia
        component="img"
        height="200"
        image={item.image}
        alt={item.title}
        className="shoppingItems-image"
      />
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          className="shoppingItems-infos"
        >
          <item>
            <Typography variant="h6" className="shoppingItems-title">
              {item.title}
            </Typography>
          </item>
          <item>
            <Typography variant="h5" className="shoppingItems-price">
              {item.price} €
            </Typography>
          </item>
        </Stack>
        <Typography
          variant="body2"
          color=" inherit"
          className="shoppingItems-description"
        >
          {item.description}
        </Typography>
      </CardContent>
      </Link>
      <CardActions disableSpacing>
        <IconButton
          color="inherit"
          onClick={() => addToCart(item)}
          className="shoppingItems-add-to-cart"
        >
          <ShoppingCartIcon />
        </IconButton>
          <IconButton color="inherit" onClick={handleFavorite}>
            {isFavorite ? (
              <FavoriteIcon
                color="inherit"
                className="shoppingItems-add-to-favorite"
              />
            ) : (
              <FavoriteBorderIcon
                color="inherit"
                className="shoppingItems-add-to-favorite"
              />
            )}
          </IconButton>{" "}
      </CardActions>
    </Card>
  );
}

export default ShoppingItems;
