import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../style/header.css";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import { AppBar, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import "../style/cart.css";
import CartItems from "./CartItems";
import { CartContext } from "../context/CartContext";

function Cart({ toggleDrawer }) {
  const { cleanCart } = React.useContext(CartContext);
  const { cartItems } = useContext(CartContext);

  return (
    <Box>
      <Stack direction="column" spacing={1} className="cart-container">
        <item>
          <AppBar position="fixed" sx={{ width: 500 }} color="transparent">
            <Stack direction="row" className="cart-header">
              <item>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <ShoppingCartIcon />
                </IconButton>
              </item>
              <item>
                <Typography variant="h6" component="div">
                  Ma Commande
                </Typography>
              </item>
              <item>
                <Button onClick={toggleDrawer} color="inherit">
                  <CloseIcon />
                </Button>
              </item>
            </Stack>
          </AppBar>
          <Divider />
        </item>
        <item className="cart-list">
          {cartItems.map((item) => (
            <CartItems key={item.id} item={item} />
          ))}
        </item>
        <AppBar position="fixed" className="cart-appbar" color="transparent">
          <Stack
            direction="column"
            className="cart-footer"
            spacing={2}
            position="static"
          >
            <item>
              <Stack direction="row" className="cart-total">
                <item>
                  <Typography variant="h6" component="div">
                    Total
                  </Typography>
                </item>
                <item>
                  <Typography variant="h6" component="div">
                    {cartItems.reduce(
                      (acc, item) => acc + parseInt(item.price),
                      0
                    )}{" "}
                    €
                  </Typography>
                </item>
              </Stack>
            </item>
            <item>
              <Button
                className="cart-wach-card-button"
                onClick={() => cleanCart()}
              >
                Vider mon panier
              </Button>
            </item>
            <item>
              <Button
                variant="contained"
                component={Link}
                to="/Cart"
                className="cart-validation-button"
              >
                Finaliser la commande
              </Button>
            </item>
          </Stack>
        </AppBar>
      </Stack>
    </Box>
  );
}

export default Cart;
