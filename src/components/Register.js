import React, { useState } from "react";
import { makeStyles, TextField, Button, InputAdornment } from "@material-ui/core/";
import {AccountCircle, Lock, Email} from "@material-ui/icons/";
import logo from "../assets/logoblue.jpeg";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  form: {
    width: "300px",
    borderRadius: "2px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "whitesmoke",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    [theme.breakpoints.down("sm")]: {
      width: "260px",
    }
  },
  title: {
    textAlign: "center",
    margin: "15px",
    marginBottom: "2rem",
  },
  logo:{
    height: "110px",
  }
}));

const Register = props => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const classes = useStyles();
  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      username: user,
      email: email,
      password: password,
      passwordConfirmation: password2
    };
    props.onSubmit(payload);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div style={{ textAlign: "center" }}>
        <img className={classes.logo} src={logo} alt="Inmobapp logo" />
      </div>
      <h1 className={classes.title}>Unirse a Inmobapp!</h1>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Usuario"
        value={user}
        onChange={e => setUser(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          )
        }}
      />
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Email"
        value={email}
        type="email"
        onChange={e => setEmail(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          )
        }}
      />
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Contraseña"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          )
        }}
      />
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Confirma contraseña"
        type="password"
        value={password2}
        onChange={e => setPassword2(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          )
        }}
      />
      <Button
        type="submit"
        variant="contained"
        size="medium"
        color="primary"
        type="submit"
        className={classes.margin}
      >
        Registrarse
      </Button>
      <Button
        onClick={props.onToggle}
        variant="contained"
        size="medium"
        className={classes.margin}
      >
        Ingresar
      </Button>
    </form>
  );
};

export default Register;
