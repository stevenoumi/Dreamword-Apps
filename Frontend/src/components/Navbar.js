import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import "../style/header.css";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { Badge, Divider, Link, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import CategoryIcon from "@mui/icons-material/Category";
import PhoneIcon from "@mui/icons-material/Phone";
import PeopleIcon from "@mui/icons-material/People";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { FavoriteContext } from "../context/FavoriteContext";
import "../style/navbar.css";

function NavBar({ toggleDrawerNavbar }) {
  const { favoriteItems } = useContext(FavoriteContext);

  const totalFavorites = favoriteItems.length;
  const NavBarItems = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      text: "Our Products",
      icon: <CategoryIcon />,
      link: "/products",
    },
    {
      text: "Favorites",
      icon: (
        <Badge badgeContent={totalFavorites} color="secondary" variant="dot">
          <FavoriteIcon />
        </Badge>
      ),
      link: "/favorites",
    },

    {
      text: "Contact",
      icon: <PhoneIcon />,
      link: "/contact",
    },
    {
      text: "DreamWorld Lovers",
      icon: <PeopleIcon />,
      link: "/lovers",
    },
    {
      text: "Join Us",
      icon: <HandshakeIcon />,
      link: "/joinus",
    },
  ];

  const DrawerNavBarList = (
    <Box>
      <List>
        {NavBarItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ border: "1px" }}>
            <ListItemButton component={Link} to={item.link}>
              <ListItemIcon className="icone-color">{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
            <Divider />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <Stack direction="column" className="nav-container">
        <item>
          <Stack direction="row" className="nav-header">
            <item>
              <cardMedia
                component="img"
                src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
                alt="DreamWorld"
                className="nav-header-image"
              />
            </item>
            <item>
              <Typography variant="h6" component="div" className="title">
                DreamWorld
              </Typography>
            </item>
            <item>
              <Button onClick={toggleDrawerNavbar} color="inherit">
                <CloseRoundedIcon />
              </Button>
            </item>
          </Stack>
        </item>
        <item className="nav-list">{DrawerNavBarList}</item>
        <item>
          <Stack direction="row" className="nav-footer">
            <item>
              <Typography variant="h6" component="div">
                © 2024 DreamWorld
              </Typography>
            </item>
          </Stack>
        </item>
      </Stack>
    </Box>
  );
}

export default NavBar;
