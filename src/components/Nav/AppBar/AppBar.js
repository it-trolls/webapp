import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import MoreIcon from "@material-ui/icons/MoreVert";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";

const useStyles = makeStyles(theme => ({
  menuButton: {
    display: "block",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      color: "white"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const ApplicationBar = props => {
  const classes = useStyles();
  const hamb = props.side ? (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="open drawer"
      onClick={props.openSideBar}
    >
      <MenuIcon />
    </IconButton>
  ) : null;
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {hamb}
        <Typography className={classes.title} variant="h6" noWrap>
          <NavLink to="/dashboard">
            <img src={logo} alt="Inmobapp logo" height="64px" />
          </NavLink>
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Buscar propiedad..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        {props.authenticated ? (
          <>
            <div className={classes.sectionDesktop}>
              <NavLink to="/nuevo" className={classes.title}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <NoteAddIcon />
                </IconButton>
              </NavLink>
              <NavLink to="/mensajes">
                <IconButton
                  aria-label="show 4 new mails"
                  style={{ color: "white" }}
                >
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
              </NavLink>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={props.menuId}
                aria-haspopup="true"
                onClick={props.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={props.mobileMenuId}
                aria-haspopup="true"
                onClick={props.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </>
        ) : (
          <NavLink to="auth">
            <Button color="inherit">Ingresar</Button>
          </NavLink>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default ApplicationBar;
