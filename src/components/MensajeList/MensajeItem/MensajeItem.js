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
        <Avatar alt={props.username} src={props.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={props.title}
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {`${props.username}: `}
            </Typography>
            {props.message}
          </>
        }
      />
      <ListItemSecondaryAction className={classes.actions}>
        <IconButton
          edge="end"
          aria-label="ver"
          component={NavLink}
          to={`/mensajes/${props.id}`}
        >
          <Visibility />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="responder"
          component={NavLink}
          to={`/mensajes/nuevo/${props.id}`}
        >
          <Comment />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="borrar"
          component={NavLink}
          to={`/mensajes/delete/${props.id}`}
        >
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default MensajeItem;
