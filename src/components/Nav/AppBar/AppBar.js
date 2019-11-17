import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Button, Typography, Badge} from "@material-ui/core"
import {Menu, AccountCircle, Mail, NoteAdd, MoreVert} from "@material-ui/icons"
import { NavLink, useHistory } from "react-router-dom";
import logo from "../../../assets/logo.png";
import Search from "../../Searchbar/Searchbar";
import { useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
  menuButton: {
    display: "block",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  title: {
    display: "block",
    color: "white",
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
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token)
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="h6" noWrap edge="start">
          <NavLink to="/dashboard">
            <img src={logo} alt="Inmobapp logo" height="60px" />
          </NavLink>
        </Typography>
        <Search />
        {token ? (
          <>
            <div className={classes.sectionDesktop}>
              <NavLink to="/dashboard/nuevo" className={classes.title}>
                <IconButton aria-label="crear anuncio" color="inherit">
                  <NoteAdd />
                </IconButton>
              </NavLink>
              <NavLink to="/mensajes">
                <IconButton
                  aria-label="ver mensajes"
                  style={{ color: "white" }}
                >
                  {props.messages ? (
                    <Badge color="secondary">
                      <Mail />
                    </Badge>
                  ) : (
                    <Mail />
                  )}
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
                <MoreVert />
              </IconButton>
            </div>
          </>
        ) : (
          <NavLink to="auth">
            <Button color="inherit" style={{ color: "white" }}>
              Ingresar
            </Button>
          </NavLink>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default ApplicationBar;
