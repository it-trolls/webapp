import React from "react";
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button, makeStyles
} from "@material-ui/core";
import { Email } from "@material-ui/icons";
import {useQuery} from "../queryHelper";
import {useDispatch, useSelector} from "react-redux"
import {NavLink, useHistory} from "react-router-dom"
import * as apiActions from "../../store/actions/apiActions"

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
  const query = useQuery(); 
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);
  const [value, setValue] = React.useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  const sendMessage = e => {
    const id = query.get("id");
    const propertyId = query.get("propertyId")
    if(value.length > 8 && id) {
      dispatch(apiActions.createMessage(value, id, token, propertyId))
      setTimeout(()=>{
        history.push("/messages")
      })
    }
  }
  return (
    <>
      <Container maxWidth="md" className={classes.container}>
        <Paper>
          <form className={classes.form} onSubmit={sendMessage}>
            <Typography variant="h4" gutterBottom>
              <Email />{" "}
              {props.answer ? "Responder mensaje" : "Escribir mensaje"}
            </Typography>
            <TextField
              id="outlined-multiline-static"
              label="Mensaje"
              multiline
              rows="4"
              value={value}
              defaultValue=""
              className={classes.textField}
              margin="normal"
              variant="outlined"
              onChange={handleChange}
            />
            <NavLink to="/mensajes/">
            <Button variant="contained" fullWidth>
              Cancelar
            </Button>
            </NavLink>
            <Button variant="contained" color="primary" type="submit">
              Enviar
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default MensajeCrear;
