import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import MobileMenu from "./MobileMenu/MobileMenu";
import AppBar from "./AppBar/AppBar";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  }
}));

const Nav = props => {
  const classes = useStyles();
  const { location } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";
  if (
    (location.pathname.match("/") && location.pathname.length == 1) ||
    location.pathname.match("/auth")
  ) {
    return null;
  }
  return (
    <div className={classes.grow}>
      <AppBar
        menuId={menuId}
        handleProfileMenuOpen={handleProfileMenuOpen}
        mobileMenuId={mobileMenuId}
        handleMobileMenuOpen={handleMobileMenuOpen}
      />
      <MobileMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        mobileMenuId={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuOpen={handleMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
      <ProfileMenu
        anchorEl={anchorEl}
        menuId={menuId}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
    </div>
  );
};

const HideableNav = withRouter(Nav);
export default HideableNav;
