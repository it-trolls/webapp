import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  Typography
} from "@material-ui/core";
import { Comment, Delete, Visibility } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  inline: {
    display: "inline"
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row"
    }
  }
}));

const MensajeItem = props => {
  const classes = useStyles();
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Nombre del guazo" src="http://lorempixel.com/200/100/" />
      </ListItemAvatar>
      <ListItemText
        primary="Sale partidazo capo, me hace falta un aguatero"
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              Porteño alcahuete
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
          </>
        }
      />
      <ListItemSecondaryAction className={classes.actions}>
        <IconButton
          edge="end"
          aria-label="ver"
          component={NavLink}
          to="/mensajes/detalle"
        >
          <Visibility />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="responder"
          component={NavLink}
          to="/mensajes/nuevo"
        >
          <Comment />
        </IconButton>
        <IconButton edge="end" aria-label="borrar">
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default MensajeItem;
