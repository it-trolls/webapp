import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import Email from "@material-ui/icons/Email";
import logo from "../assets/logoblue.jpeg";

const Form = styled.form`
  width: 450px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 1);
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
      email: email,
      password: password
    };
    props.onSubmit(payload);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ textAlign: "center" }}>
        <Logo src={logo} alt="Inmobapp logo" />
      </div>
      <Title>Unirse a Inmobapp!</Title>
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
    </Form>
  );
};

export default Register;
