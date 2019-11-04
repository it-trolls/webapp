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
  return (
    <div>
      <Nav />
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h4" gutterBottom>
          <Email /> Mis mensajes
        </Typography>
        <Divider variant="inset" component="li" />
        <List className={classes.root}>
          <Mensaje></Mensaje>
          <Divider variant="inset" component="li" />
          <Mensaje></Mensaje>
          <Divider variant="inset" component="li" />
          <Mensaje></Mensaje>
          <Divider variant="inset" component="li" />
          <Mensaje></Mensaje>
        </List>
      </Container>
    </div>
  );
};

export default MensajeList;
