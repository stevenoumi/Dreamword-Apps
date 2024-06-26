import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "../style/smallHeader.css";
import Drawer from "@mui/material/Drawer";
import Cart from "./Cart";
import NavBar from "./Navbar";
import {  Badge, Button, Grid, Stack } from "@mui/material";
import { CartContext } from "../context/CartContext";
import { FavoriteContext } from "../context/FavoriteContext";
import AvatarMenu from "./AvatarMenu";

function SmallHeader() {
  const [CartOpen, setCartOpen] = React.useState(false);
  const [NavBarOpen, setNavBarOpen] = React.useState(false);
  const { cartItems } = useContext(CartContext);
  const { favoriteItems } = useContext(FavoriteContext);

  const toggleDrawer = () => {
    setCartOpen((prevState) => !prevState);
  };
  const toggleDrawerNavbar = () => {
    setNavBarOpen((prevState) => !prevState);
  };

  const totalUniqueItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalFavorites = favoriteItems.length;



  return (
    <>
      <AppBar position="fixed" color="" className="app-smallheader">
        <Toolbar>
          <Grid container>
            <Grid item xs={5} className="smallheader-menu">
              <Button
                variant="contained"
                color="primary"
                startIcon={<ArrowBackIosNewIcon />}
                className="smallheader-back-button"
                component={Link}
                to="/"
              >
                Retour A l'accueil
              </Button>
            </Grid>
            <Grid item xs={2} className="title">
              <Typography variant="h5">DreamWorld</Typography>
            </Grid>
            <Grid item xs={5}>
              <Stack
                direction="row"
                spacing={2}
                className="app-smallheader-tools"
              >
                <item></item>
                <item>
                  <IconButton
                    aria-label="favorites"
                    color="inherit"
                    component={Link}
                    to="/favorites"
                  >
                    <Badge
                      badgeContent={totalFavorites}
                      color="secondary"
                      variant="dot"
                    >
                      <FavoriteBorderIcon />
                    </Badge>
                  </IconButton>
                </item>
                <item>
                  <IconButton
                    aria-label="cart"
                    onClick={toggleDrawer}
                    color="inherit"
                  >
                    <Badge badgeContent={totalUniqueItems} color="secondary">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </item>
                <item>
                <AvatarMenu />
                </item>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer open={CartOpen} onClose={toggleDrawer} anchor="right">
        <Cart toggleDrawer={toggleDrawer} />
      </Drawer>
      <Drawer open={NavBarOpen} onClose={toggleDrawerNavbar} anchor="left">
        <NavBar toggleDrawerNavbar={toggleDrawerNavbar} />
      </Drawer>
    </>
  );
}

export default SmallHeader;
