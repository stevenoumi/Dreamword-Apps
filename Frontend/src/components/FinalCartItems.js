import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../context/CartContext";
import "../style/finalCartItem.css";

function FinalCartItems({ item }) {
    const { removeFromCart, addToCart } = React.useContext(CartContext);
    const [quantity, setQuantity] = React.useState(item.quantity);
    const [totalPrice, setTotalPrice] = React.useState(item.price * item.quantity);
  
    const updateQuantity = (newQuantity) => {
      if (newQuantity > 0) {
        setQuantity(newQuantity);
        setTotalPrice(item.price * newQuantity);
        addToCart({ ...item, quantity: newQuantity });
      } else if (newQuantity === 0) {
        removeFromCart(item.id);
      }
    };
    return (
        <Stack direction="row" spacing={2} className="finalcartitem-container">
            <div className="finalcartitem-image-container">
                <img className="finalcartitem-image" src={item.image} alt={item.name} />
            </div>
            <div className="finalcartitem-details">
                <Typography variant="subtitle1" className="finalcartitem-category">
                    {item.category}
                </Typography>
                <Typography variant="h5" className="finalcartitem-title">
                    {item.title}
                </Typography>
            </div>
            <Stack direction="row" spacing={1} className="finalcartitem-quantity">
                <IconButton onClick={() => updateQuantity(quantity - 1)}>
                    <RemoveIcon />
                </IconButton>
                <Typography variant="body2" className="finalcartitem-quantity-number"> {quantity} </Typography>
                <IconButton onClick={() => updateQuantity(quantity + 1)}>
                    <AddIcon />
                </IconButton>
            </Stack>
            <div className="finalcartitem-price-container">
                <Typography variant="subtitle1" className="finalcartitem-price">
                    {totalPrice.toFixed(2)} €
                </Typography>
                <IconButton className="finalcartitem-delete-button" onClick={() => removeFromCart(item.id)}>
                    <DeleteIcon />
                </IconButton>
            </div>
        </Stack>
    );
}

export default FinalCartItems;
