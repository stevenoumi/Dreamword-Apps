import * as React from "react";
import Typography from "@mui/material/Typography";
import "../style/header.css";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { Avatar, Divider, Link, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import CategoryIcon from "@mui/icons-material/Category";
import PhoneIcon from "@mui/icons-material/Phone";
import PeopleIcon from '@mui/icons-material/People';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HandshakeIcon from '@mui/icons-material/Handshake';
import "../style/navbar.css";

function NavBar({ toggleDrawerNavbar }) {
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
      icon: <FavoriteIcon />,
      link: "/favorites",
    },
    {
      text: "Blog",
      icon: <LightbulbIcon />,
      link: "/blog",
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
          <ListItem key={item.text} disablePadding sx={{ border: '1px' }}>
            <ListItemButton component={Link} to={item.link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
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
      <Stack direction="column" spacing={2} className="nav-container">
        <item>
          <Stack direction="row" className="nav-header">
            <item>
            <Avatar
                    alt="Remy Sharp"
                    src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25"
                    className="avatar"
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
        <item  className='nav-list'>
          {DrawerNavBarList}
        </item>
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
