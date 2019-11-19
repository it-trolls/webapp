import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../../../store/actions/userActions";
import {NavLink} from "react-router-dom";

const ProfileMenu = props => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);

  const logout = () => {
    dispatch(userActions.authLogout())
    props.handleMenuClose()
  }
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
      <NavLink to={`/dashboard?created_by=${token}`}>
        <MenuItem onClick={props.handleMenuClose}>Mis anuncios</MenuItem>
      </NavLink>
      <MenuItem onClick={logout}>Salir</MenuItem>
    </Menu>
  );
};

export default ProfileMenu;
