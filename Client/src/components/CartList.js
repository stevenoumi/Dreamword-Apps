import React, { useContext } from "react";
import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteItem from "../components/FavoriteItems";
import "../style/favoriteList.css";
import { CartContext } from "../context/CartContext";

function CartList() {
  const { cartItems } = useContext(CartContext);
  //const { cleanCart } = useContext(CartContext);
  console.log(cartItems);

  return (
    <>
      <Stack direction="row" justifyContent="center">
        <item>
          <Stack direction="column" spacing={1} className="favorite-list">
            <item>
              <Button component={Link} to="/" color="inherit">
                continuer mes achats
              </Button>
            </item>
            <item>
              {cartItems.map((item) => (
                <FavoriteItem key={item.id} item={item} />
              ))}
            </item>
          </Stack>
        </item>
      </Stack>
    </>
  );
}

export default CartList;
