import React, { useContext } from "react";
import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import "../style/cartList.css";
import { CartContext } from "../context/CartContext";
import CartItems from "./CartItems";

function CartList() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <Stack direction="row" spacing={2}>
        <item  className="cartlist-list-container">
          <Stack direction="column" spacing={1} className="cartlist-list">
            <item>
              <Button component={Link} to="/Cart" color="inherit" className="cartlist-button">
                continuer mes achats
              </Button>
            </item>
            <item>
              {cartItems.map((item) => (
                <CartItems key={item.id} item={item} />
              ))}
            </item>
          </Stack>
        </item>
      </Stack>
    </>
  );
}

export default CartList;
