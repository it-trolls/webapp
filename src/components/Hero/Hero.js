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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: "Logo Navigation Navigation Navigation" ". Title Title ." ". Search Search ." ". . . .";
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Navbar = styled.nav`
  grid-area: Navigation;
  margin-top: 25px;
  padding-left: 25px;
  padding-right: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Logo = styled.a`
  grid-area: Logo;
  margin-top: 2rem;
  padding-left: 25px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  color: white;
  a {
    text-decoration: none;
    color: white;
  }
`;

const MenuLink = styled.li`
  background: none;
  font-size: 1.1rem;
  letter-spacing: 1.5px;
  font-weight: 500;
  :hover {
    background: #ccc;
  }
  a {
    display: inline-block;
    padding: 10px 15px;
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: #333;
  }
`;

const Title = styled.div`
  text-align: center;
  grid-area: Title;
  color: white;
`;

const Search = styled.div`
  text-align: center;
  grid-area: Search;
  color: white;
`;

const hero = pros => {
  return (
    <Hero>
      <Navbar>
        <Menu>
          <Button color="inherit">
            <NavLink to="/auth">Crear anuncio</NavLink>
          </Button>
        </Menu>
        <Menu>
          <Button variant="outlined" color="inherit">
            <NavLink to="/auth">Ingresar</NavLink>
          </Button>
        </Menu>
      </Navbar>
      <Title>
        <Typography variant="h2" color="inherit" gutterBottom>
          <img src={logo} alt="Inmob logo" height="100px" />
        </Typography>
        <Typography variant="h4" color="inherit">
          Inmobapp, encontra tu nuevo Hogar!
        </Typography>
      </Title>
      <Search>
        <Searchbar></Searchbar>
        <Button variant="outlined" color="inherit">
          <NavLink to="/dashboard" style={{ color: "white" }}>
            Ver todos los anuncios
          </NavLink>
        </Button>
      </Search>
    </Hero>
  );
};

export default hero;
