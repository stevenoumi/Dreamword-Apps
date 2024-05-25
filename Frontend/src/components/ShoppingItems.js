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
import { Rating, Stack } from "@mui/material";
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
  const itemId = item.id;
  if(!itemId) {
    console.log('Item id not found');
  }
  console.log(itemId);
  return (
    <Card className="shoppingItems-container">
      <Link to={`/detail/${itemId}`} style={{ textDecoration: 'none' }}>
        <CardMedia
          component="img"
          height="200"
          image={item.image}
          alt={item.title}
          className="shoppingItems-image"
        />
        <CardContent className="cardcontent-style">
          <Stack direction="row" className="shoppingItems-infos">
            <div>
              <Typography variant="h6" className="shoppingItems-title">
                {item.title}
              </Typography>
            </div>
            <div>
              <Typography variant="h5" className="shoppingItems-price">
                {item.price} €
              </Typography>
            </div>
          </Stack>
          <Stack direction='row' spacing={1} className="shoppingItems-rating">
            <Typography 
            variant="h7"
            fontFamily={'comfortaa'}
            fontWeight={'bold'}
            >
              4.8
            </Typography>
          <Rating defaultValue={4} readOnly max={1} size="medium"/>
          </Stack>
        </CardContent>
      </Link>
      <CardActions className="cardaction-style">
        <IconButton
          color="inherit"
          onClick={() => addToCart(item)}
          className="shoppingItems-add-to-cart"
          fontSize="large"
        >
          <ShoppingCartIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleFavorite}>
          {isFavorite ? (
            <FavoriteIcon color="inherit" className="shoppingItems-add-to-favorite" />
          ) : (
            <FavoriteBorderIcon color="inherit" className="shoppingItems-add-to-favorite"  />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ShoppingItems;
