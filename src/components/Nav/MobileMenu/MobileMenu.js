import React from "react";
import { Menu, MenuItem, Badge, IconButton } from "@material-ui/core";
import { NoteAdd, AccountCircle, Mail } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as userActions from "../../../store/actions/userActions";

const MobileMenu = props => {
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userActions.authLogout());
    props.handleMobileMenuClose();
  };
  return (
    <Menu
      anchorEl={props.mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={props.mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={props.isMobileMenuOpen}
      onClose={props.handleMobileMenuClose}
    >
      <NavLink to="/dashboard/nuevo">
        <MenuItem onClick={props.handleMobileMenuClose}>
          <IconButton aria-label="crear anuncio" color="inherit">
            <NoteAdd />
          </IconButton>
          <p>Crear anuncio</p>
        </MenuItem>
      </NavLink>
      <NavLink to={`/dashboard?created_by=${token}`}>
        <MenuItem onClick={props.handleMobileMenuClose}>
          <IconButton aria-label="mis anuncios" color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Mis anuncios</p>
        </MenuItem>
      </NavLink>
      <NavLink to="/mensajes">
        <MenuItem onClick={props.handleMobileMenuClose}>
          <IconButton aria-label="mostrar mensajes" color="inherit">
            <Badge color="secondary">
              <Mail />
            </Badge>
          </IconButton>
          <p>Mensajes</p>
        </MenuItem>
      </NavLink>
      <MenuItem onClick={logout}>
        <IconButton aria-label="Salir" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Salir</p>
      </MenuItem>
    </Menu>
  );
};

export default MobileMenu;
