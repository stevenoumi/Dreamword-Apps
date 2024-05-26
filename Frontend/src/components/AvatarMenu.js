import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import ProfileIcon from "@mui/icons-material/Person";
import PaymentIcon from "@mui/icons-material/Payment";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import "../style/avatarMenu.css";

function AvatarMenu() {
  const [userData, setUserData] = React.useState({
    photo: "profile.png",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error("No token found");
        }

        const response = await fetch("http://localhost:5000/profile/get-profile", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorMessage = `An error has occured: ${response.status} - ${response.statusText}`;
          throw new Error(errorMessage);
        }

        const data = await response.json();
        setUserData({
          photo: data.photo,
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  React.useEffect(() => {
    verifyToken();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const verifyToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };


  return (
    <div>
      <Avatar
        alt="User Profile"
        className="avatar"
        onClick={handleClick}
        src={userData.photo ? userData.photo : "profile.png"}
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="pop-menu"
      >
        <Box className="header-pop-menu">
          <MenuItem component={Link} to="/profile" onClick={handleClose}>
            <ProfileIcon className="menu-icon" />
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <PaymentIcon className="menu-icon" />
            Mes moyens de paiement
          </MenuItem>
          <MenuItem onClick={() => { handleClose(); handleLogout(); }}>
            <LogoutIcon className="menu-icon" />
            Logout
          </MenuItem>
        </Box>
      </Menu>
    </div>
  );
}

export default AvatarMenu;
