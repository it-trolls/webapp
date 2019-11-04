import React from "react";
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Email } from "@material-ui/icons";
import Nav from "../Nav/Nav";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "6rem"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const MensajeCrear = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <>
      <Nav />

      <Container maxWidth="md" className={classes.container}>
        <Paper>
          <form className={classes.form}>
            <Typography variant="h4" gutterBottom>
              <Email />{" "}
              {props.answer ? "Responder mensaje" : "Escribir mensaje"}
            </Typography>
            <TextField
              id="standard-title"
              className={classes.textField}
              label="Titulo"
              margin="normal"
              value={value}
              onChange={handleChange}
            />
            <TextField
              id="outlined-multiline-static"
              label="Mensaje"
              multiline
              rows="4"
              defaultValue=""
              className={classes.textField}
              margin="normal"
              variant="outlined"
              onChange={handleChange}
            />
            <Button variant="contained" color="secondary">
              Cancelar
            </Button>
            <Button variant="contained" color="primary" submit>
              Enviar
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default MensajeCrear;
