import React from "react";
import Nav from "../Nav/Nav";
import Mensaje from "./MensajeItem/MensajeItem";
import { Container, List, Divider, Typography, Icon } from "@material-ui/core";
import { Email } from "@material-ui/icons/";
import { makeStyles } from "@material-ui/core/styles";

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
  const messages = [
    {
      id: 1,
      username: "Ismael",
      message: "gpñaogjas poasjg opasj poagso jqpowjop qjowp oajsfp jqpwo ",
      avatar: "http://lorempixel.com/200/100/"
    },
    {
      id: 3,
      username: "Porteño",
      message: "gpñaogjas poaadsadsadsadas poagso jqpowjop qjowp oajsfp jqpwo ",
      avatar: "http://lorempixel.com/200/100/"
    },
    {
      id: 4,
      username: "Gaston",
      message: "gpñaogjasdpasj poagso jqpowjop qjowp oajsfp jqpwo ",
      avatar: "http://lorempixel.com/200/100/"
    },
    {
      id: 12,
      username: "Roberto",
      message: "gpñaogjas pasdasdqpowjop qjowp oajsfp jqpwo ",
      avatar: "http://lorempixel.com/200/100/"
    }
  ];
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
