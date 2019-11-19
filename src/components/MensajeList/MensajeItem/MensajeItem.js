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
import {useDispatch, useSelector} from "react-redux"
import * as apiActions from "../../../store/actions/apiActions"

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
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token)

  const deleteMessage = () => {
    dispatch(apiActions.deleteMessage(props.id, token));
  }
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
          to={`/mensajes/detalle/${props.id}`}
        >
          <Visibility />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="responder"
          component={NavLink}
          to={`/mensajes/nuevo?id=${props.sender}&propertyId=${props.propertyId}`}
        >
          <Comment />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="borrar"
          onClick={deleteMessage}
        >
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default MensajeItem;
