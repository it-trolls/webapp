import React from "react";
import { Container, Typography, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Email } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const MensajeDetalle = props => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
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
  );
};

export default MensajeDetalle;
