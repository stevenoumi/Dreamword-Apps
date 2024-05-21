import React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import ProfileIcon from "@mui/icons-material/Person";
import PaymentIcon from "@mui/icons-material/Payment";
import LogoutIcon from "@mui/icons-material/Logout";
import "../style/avatarMenu.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

function AvatarMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Avatar
        alt="User Profile"
        className="avatar"
        onClick={handleClick}
        src="profile.png"
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="pop-menu"
      >
        <Box className="header-pop-menu">
          <MenuItem component={Link}  to="/profile" onClick={handleClose} >
            <ProfileIcon className="menu-icon" />
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <PaymentIcon className="menu-icon" />
            Mes moyens de paiement
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <LogoutIcon className="menu-icon" />
            Logout
          </MenuItem>
        </Box>
      </Menu>
    </div>
  );
}

export default AvatarMenu;
