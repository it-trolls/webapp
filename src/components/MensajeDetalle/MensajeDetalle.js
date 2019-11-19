import React from "react";
import { Container, Typography, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Email } from "@material-ui/icons";
import {NavLink} from "react-router-dom"
import axios from "axios"

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
  const [message, setMessage] = React.useState({})
  
  React.useEffect(()=>{
    const id = props.match.params.msgId
    const headers = {
      'x-access-token': localStorage.getItem("token")
    }
    axios
    .get(`http://localhost:3010/api/v1/messages/${id}`, {"headers": headers})
    .then(res => {
      setMessage(res.data)
    })
    .catch(error => {
      console.log(error)
    });
  },[])


  return (
    <>
      <Container maxWidth="md" className={classes.container}>
        <Paper>
          <Typography variant="h6"><NavLink to="/mensajes">Volver</NavLink></Typography>
          <Typography variant="h4" gutterBottom>
            <Email /> Leer mensaje
          </Typography>
          <Typography variant="h5" gutterBottom>
            De: {message.sender}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Propiedad: {message.propertyTitle}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Mensaje:
          </Typography>
          <Typography variant="p">{message.body}</Typography>
        </Paper>
      </Container>
    </>
  );
};

export default MensajeDetalle;
