import React from "react";
import { Container, Typography, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Email } from "@material-ui/icons";
import Nav from "../Nav/Nav";
const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  container: {
    marginTop: "6rem"
  }
}));

const MensajeDetalle = props => {
  const classes = useStyles();
  return (
    <>
      <Nav />

      <Container maxWidth="md" className={classes.container}>
        <Paper>
          <Typography variant="h4" gutterBottom>
            <Email /> Leer mensaje
          </Typography>
          <Typography variant="h5" gutterBottom>
            De: {props.from}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Titulo: {props.title}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Mensaje:
          </Typography>
          <Typography variant="p">{props.body}</Typography>
        </Paper>
      </Container>
    </>
  );
};

export default MensajeDetalle;
