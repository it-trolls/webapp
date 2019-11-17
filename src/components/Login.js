import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import logo from "../assets/logoblue.jpeg";

const Form = styled.form`
  width: 220px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-color: whitesmoke;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const Title = styled.h2`
  text-align: center;
  margin: 15px;
  margin-bottom: 2rem;
`;

const Logo = styled.img`
  height: 110px;
`;

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

const Login = props => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      email: user,
      password: password
    };
    props.onSubmit(payload);
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div style={{ textAlign: "center" }}>
        <img className={classes.logo} src={logo} alt="Inmobapp logo" />
      </div>
      <h1 className={classes.title}>Bienvenido a Inmobapp!</h1>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Email"
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
      <Button
        variant="contained"
        size="medium"
        color="primary"
        type="submit"
        value="Submit"
        className={classes.margin}
      >
        Ingresar
      </Button>
      <Button
        variant="contained"
        size="medium"
        className={classes.margin}
        onClick={props.onToggle}
      >
        Registrarse
      </Button>
    </form>
  );
};

export default Login;
