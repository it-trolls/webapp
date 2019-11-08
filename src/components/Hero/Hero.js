import React from "react";
import styled from "styled-components";
import background from "../../assets/citybg3.jpg";
import logo from "../../assets/logo.png";
import Searchbar from "../Searchbar/Searchbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  header: {
    minHeight: "100vh",
    overflow: "hidden",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "grid",
    gridTemplateColumns: "repeat(autofit, minmax(230px, 1fr))",
    color: "white"
  },
  nav: {
    justifySelf: "flex-end",
    padding: "1rem"
  },
  title: {
    justifySelf: "center ",
    padding: "1rem",
    color: "white",
    textAlign: "center"
  }
}));

const Hero = props => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.nav}>
        <Button
          variant="outlined"
          color="inherit"
          style={{ borderColor: "white", color: "white" }}
          component={NavLink}
          to="/auth"
        >
          Ingresar
        </Button>
      </div>
      <div className={classes.title}>
        <Typography variant="h2" color="inherit" gutterBottom>
          <img src={logo} alt="Inmob logo" height="100px" />
        </Typography>
        <Typography variant="h4" color="inherit" gutterBottom>
          Inmobapp, encontra tu nuevo Hogar!
        </Typography>
        <Searchbar></Searchbar>
        <Button
          variant="outlined"
          color="inherit"
          component={NavLink}
          to="/dashboard"
        >
          Ver todos los anuncios
        </Button>
      </div>
    </div>
  );
};

export default Hero;
