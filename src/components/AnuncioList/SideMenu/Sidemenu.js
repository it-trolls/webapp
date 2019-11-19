import React from "react";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import logo from "../../../assets/logoblue.jpeg";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { ListSubheader } from "@material-ui/core";
import { NavLink, useHistory } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const Sidemenu = props => {
  const classes = useStyles();
  const { container } = props;
  const theme = useTheme();

  const handleClick = url => {
    props.handleDrawerToggle();
    props.fetchAnuncios(url);
  };

  const drawer = (
    <div>
      <Typography align="center">
        <img src={logo} alt="Inmobapp logo" height="64px" />
      </Typography>
      <Divider />
      <List
        aria-label="ordenar-anuncios"
        subheader={
          <ListSubheader component="div" id="ordenar-anuncios">
            Ordenar anuncios
          </ListSubheader>
        }
      >
        <ListItem>
          <ListItemText primary="Tipo de inmueble" />
        </ListItem>
        <List dense component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            onClick={() => handleClick("type=house")}
          >
            <ListItemText primary="Casa" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            onClick={() => handleClick("type=department")}
          >
            <ListItemText primary="Departamento" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            onClick={() => handleClick("type=office")}
          >
            <ListItemText primary="Oficina" />
          </ListItem>
        </List>
        <ListItem>
          <ListItemText primary="Cantidad de habitaciones" />
        </ListItem>
        <List dense component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            onClick={() => handleClick("bedrooms=1")}
          >
            <ListItemText primary="Monoambiente" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            onClick={() => handleClick("bedrooms=2")}
          >
            <ListItemText primary="Dos habitaciones" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            onClick={() => handleClick("bedrooms=3")}
          >
            <ListItemText primary="Más de dos" />
          </ListItem>
        </List>
        <ListItem>
          <ListItemText primary="Ubicación" />
        </ListItem>
        <List dense component="div">
          <ListItem
            button
            className={classes.nested}
            onClick={() => handleClick("location=centro")}
          >
            <ListItemText primary="Centro" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            onClick={() => handleClick("location=micro")}
          >
            <ListItemText primary="Microcentro" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            onClick={() => handleClick("location=macro")}
          >
            <ListItemText primary="Macrocentro" />
          </ListItem>
        </List>
      </List>
    </div>
  );
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default Sidemenu;
