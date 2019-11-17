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
import { NavLink } from "react-router-dom";

const SideMenu = styled.div`
  margin-top: 2.5rem;
  flex: 15%;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  height: 400px;
  ul {
    list-style: none;
    margin-top: 5px;
    padding: 5px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    margin-left: 0px;
  }
`;
const Category = styled.h4`
  font-weight: bold;
`;

const Listrrr = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

const Filter = styled.div`
  cursor: pointer;
`;

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
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
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
            component={NavLink}
            to="/dashboard?type=casa"
            className={classes.nested}
            onClick={props.handleDrawerToggle}

          >
            <ListItemText primary="Casa" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/dashboard?type=depto"
            className={classes.nested}
            onClick={props.handleDrawerToggle}

          >
            <ListItemText primary="Departamento" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/dashboard?type=oficina"
            className={classes.nested}
            onClick={props.handleDrawerToggle}

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
            component={NavLink}
            to="/dashboard?size=1"
            className={classes.nested}
            onClick={props.handleDrawerToggle}

          >
            <ListItemText primary="Monoambiente" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/dashboard?size=2"
            className={classes.nested}
            onClick={props.handleDrawerToggle}

          >
            <ListItemText primary="Dos habitaciones" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/dashboard?size=3"
            className={classes.nested}
            onClick={props.handleDrawerToggle}

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
            component={NavLink}
            to="/dashboard?location=centro"
            className={classes.nested}
            onClick={props.handleDrawerToggle}
          >
            <ListItemText primary="Centro" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/dashboard?location=micro"
            className={classes.nested}
            onClick={props.handleDrawerToggle}

          >
            <ListItemText primary="Microcentro" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/dashboard?location=macro"
            className={classes.nested}
            onClick={props.handleDrawerToggle}
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
