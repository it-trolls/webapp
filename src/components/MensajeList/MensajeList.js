import React from "react";
import Nav from "../Nav/Nav";
import Mensaje from "./MensajeItem/MensajeItem";
import { Container, List, Divider, Typography, Icon } from "@material-ui/core";
import { Email } from "@material-ui/icons/";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  container: {
    marginTop: "6rem",
    textAlign: "center"
  }
}));

const MensajeList = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [messages, setMessages] = React.useState([])
  return (
    <div>
      <Nav />
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h4" gutterBottom>
          <Email /> Mis mensajes
        </Typography>
        <Divider variant="inset" component="li" />
        <List className={classes.root}>
          {messages.map(msg => (
            <>
              <Mensaje
                id={msg.id}
                userid={msg.userid}
                username={msg.username}
                avatar={msg.avatar}
                message={msg.message}
              />
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </Container>
    </div>
  );
};

export default MensajeList;
