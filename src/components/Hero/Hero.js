import React from "react";
import styled from "styled-components";
import background from "../../assets/citybg3.jpg";
import logo from "../../assets/logo.png";
import Searchbar from "../Searchbar/Searchbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const Hero = styled.header`
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(autofit, minmax(230px,1fr);
`;

const Title = styled.div`
  text-align: center;
  grid-area: Title;
  color: white;
`;

const hero = pros => {
  return (
    <Hero>
      <div style={{ justifySelf: "flex-end", padding: "1rem" }}>
        <Button
          variant="outlined"
          color="inherit"
          style={{ borderColor: "white" }}
        >
          <NavLink to="/auth" style={{ color: "white" }}>
            Ingresar
          </NavLink>
        </Button>
      </div>
      <Title
        style={{
          justifySelf: "center ",
          padding: "1rem",
          color: "white",
          textAlign: "center"
        }}
      >
        <Typography variant="h2" color="inherit" gutterBottom>
          <img src={logo} alt="Inmob logo" height="100px" />
        </Typography>
        <Typography variant="h4" color="inherit" gutterBottom>
          Inmobapp, encontra tu nuevo Hogar!
        </Typography>
        <Searchbar></Searchbar>
        <Button variant="outlined" color="inherit">
          <NavLink to="/dashboard" style={{ color: "white" }}>
            Ver todos los anuncios
          </NavLink>
        </Button>
      </Title>
    </Hero>
  );
};

export default hero;
