import React from "react";
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";
import bg from "../assets/houseinside.jpg";
import {makeStyles} from "@material-ui/core"
import { Redirect } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as userActions from '../store/actions/userActions'

const Card = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const useStyles = makeStyles(theme => ({
  container: {
    height: "100vh",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
  },
  panel: {
    height: "100%",
    backgroundColor: "rgba(1, 1, 1, 0.15)"
  },
  card: {
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }

}))

const Auth = props => {
  const classes = useStyles();
  const [login, setLogin] = React.useState(true);
  const token = useSelector(state => state.user.token)
  const dispatch = useDispatch()


  const toggleAuth = () => {
    setLogin(!login);
  };

  const onSubmit = payload => {
    if (login) {
      dispatch(userActions.authLogin(payload))
    } else {
      dispatch(userActions.authSignup(payload))
    }
  };

  const display = login ? (
    <Login onToggle={toggleAuth} onSubmit={payload => onSubmit(payload)} />
  ) : (
    <Register onToggle={toggleAuth} onSubmit={payload => onSubmit(payload)} />
  );

  return token ? (
    <Redirect to="dashboard" />
  ) : (
    <section className={classes.container}>
      <div className={classes.panel}>
        <div className={classes.card}>{display}</div>
      </div>
    </section>
  );
};

export default Auth;
