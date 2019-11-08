import React from "react";
import styled from "styled-components";
import axios from "axios";
import Login from "./Login";
import Register from "./Register";
import bg from "../assets/houseinside.jpg";

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

class Auth extends React.Component {
  state = {
    login: true
  };

  onSubmit = payload => {
    if (this.state.login) {
      axios
        .post("http://localhost:3010/api/v1/auth/login", payload)
        .then(res => {
          console.log("Authenticato");
        })
        .catch(err => console.log(err));
      //this.props.history.push("/dashboard");
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
        <Panel>
          <Card>{display}</Card>
        </Panel>
      </Container>
    );
  }
}

export default Auth;
