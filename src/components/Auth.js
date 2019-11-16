import React from "react";
import styled from "styled-components";
import axios from "axios";
import Login from "./Login";
import Register from "./Register";
import bg from "../assets/houseinside.jpg";
import { Redirect } from "react-router-dom";
const Container = styled.div`
  font-family: "Roboto", sans-serif;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
`;

const Panel = styled.div`
  height: 100%;
  background-color: rgba(1, 1, 1, 0.15);
`;

const Card = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const Auth = props => {
  const [login, setLogin] = React.useState(true);

  const toggleAuth = () => {
    setLogin(!login);
  };

  const onSubmit = payload => {
    if (login) {
      console.log(payload);
      props.onLogin(payload);
    } else {
      props.onRegister(payload);
    }
  };

  const display = login ? (
    <Login onToggle={toggleAuth} onSubmit={payload => onSubmit(payload)} />
  ) : (
    <Register onToggle={toggleAuth} onSubmit={payload => onSubmit(payload)} />
  );

  return props.isAuthenticated ? (
    <Redirect to="dashboard" />
  ) : (
    <Container>
      <Panel>
        <Card>{display}</Card>
      </Panel>
    </Container>
  );
};

export default Auth;
