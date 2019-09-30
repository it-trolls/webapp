import React from "react";
import styled from "styled-components";
import axios from "axios";
import Login from "./Login";
import Register from "./Register";
import bg from "../assets/loginbg.jpg";

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  background-image: url(${bg});
  background-size: cover;
  height: 100vh;
`;
const Card = styled.div`
  margin: auto;
`;

class Auth extends React.Component {
  state = {
    login: true
  };

  onSubmit = payload => {
    if (this.state.login) {
      axios
        .post("localhost:3010/auth/login", payload)
        .then(res => {
          console.log("Authenticato");
        })
        .catch(err => console.log(err));
      this.props.history.push("/");
    } else {
      axios
        .post("localhost:3010/auth/register", payload)
        .then(res => console.log("Registrado"))
        .catch(err => console.log(err));
    }
  };

  render() {
    const display = this.state.login ? (
      <Login
        onToggle={() => this.setState({ login: !this.state.login })}
        onSubmit={payload => this.onSubmit(payload)}
      />
    ) : (
      <Register
        onToggle={() => this.setState({ login: !this.state.login })}
        onSubmit={payload => this.onSubmit(payload)}
      />
    );
    return (
      <Container>
        <Card>{display}</Card>
      </Container>
    );
  }
}

export default Auth;
