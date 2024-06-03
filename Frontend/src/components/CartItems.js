import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { CardMedia, Stack, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "../style/cartItems.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { CartContext } from "../context/CartContext";

function CartItems({ item }) {
  const { removeFromCart } = React.useContext(CartContext);
  const [quantity, setQuantity] = React.useState(item.quantity);
  const [totalPrice, setTotalPrice] = React.useState(
    item.price * item.quantity
  );

  const updateQuantity = (newQuantity) => {
    if (newQuantity > 0) {
      setQuantity(newQuantity);
      setTotalPrice(item.price * newQuantity);
    } else if (newQuantity === 0) {
      removeFromCart(item.product_id);
    }
  };
  return (
    <Box className="cart-item">
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase>
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              className="cart-item-image"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container alignItems="center">
          <Stack direction="column" spacing={1} flexGrow={1}>
            <item>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <item>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    className="cart-item-title"
                  >
                    {item.title}
                  </Typography>
                </item>
                <item>
                  <IconButton
                    className="cart-item-delete-button"
                    onClick={() => removeFromCart(item.product_id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </item>
              </Stack>
            </item>
            <item>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="body2">
                  {item.price} € x {quantity}
                </Typography>
              </Stack>
            </item>
            <item>
              <Stack direction="row" justifyContent="space-between">
                <item>
                  <Stack
                    direction="row"
                    spacing={1}
                    className="cart-item-change-quantity"
                  >
                    <item>
                      <IconButton onClick={() => updateQuantity(quantity - 1)}>
                        <RemoveIcon />
                      </IconButton>
                    </item>
                    <item>
                      <Typography variant="body2" component="div">
                        {quantity}
                      </Typography>
                    </item>
                    <item>
                      <IconButton onClick={() => updateQuantity(quantity + 1)}>
                        <AddIcon />
                      </IconButton>
                    </item>
                    
                  </Stack>
                </item>
                <item>
                  <Typography variant="subtitle1" className="cart-item-price">
                    {totalPrice.toFixed(2)} €
                  </Typography>
                </item>
              </Stack>
            </item>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CartItems;
