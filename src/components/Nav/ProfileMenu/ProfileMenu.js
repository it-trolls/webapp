import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const ProfileMenu = props => {
  return (
    <Menu
      anchorEl={props.anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={props.isMenuOpen}
      onClose={props.handleMenuClose}
    >
      <MenuItem onClick={props.handleMenuClose}>Mis anuncios</MenuItem>
      <MenuItem onClick={props.handleMenuClose}>Perfil</MenuItem>
      <MenuItem onClick={props.handleMenuClose}>Salir</MenuItem>
    </Menu>
  );
};

export default ProfileMenu;
