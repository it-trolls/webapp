import React from "react";
import styled from "styled-components";
import Dashboard from "./Dashboard";
import background from "../assets/citybg.jpg";
import { NavLink } from "react-router-dom";
const Hero = styled.header`
  min-height: 600px;
  width: 100%;
  overflow-x: hidden;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

const Navbar = styled.nav`
  margin-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  display: inline;
  img {
    vertical-align: middle;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
`;

const MenuLink = styled.li`
  background: #333;
  :hover {
    background: whitesmoke;
  }
  a {
    display: inline-block;
    padding: 10px 15px;
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: #333;
  }
`;

const Searchbar = styled.div`
  margin-top: 15%;
  margin: auto;
  width: 650px;
  height: 50px;
  display: flex;
  div {
    flex: 30%;
    input {
      width: 100%;
      padding: 15px;
      height: 100%;
      border: none;
    }
  }
  button {
    border: none;
    .material-icons {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`;

const SelectType = styled.select`
  height: 100%;
  width: 25%;
  border: none;
`;

const SelectCity = styled.select`
  height: 100%;
  width: 15%;
  border: none;
`;

const Home = () => {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <Hero>
        <Navbar>
          <Logo>
            <img
              src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg"
              alt="freeCodeCamp logo"
            />
          </Logo>
          <Menu>
            <MenuLink>
              <NavLink to="/auth">Ingresar</NavLink>
            </MenuLink>
            <MenuLink>
              <NavLink to="/faq">FAQ</NavLink>
            </MenuLink>
            <MenuLink to="/otro">
              <NavLink>Otro</NavLink>
            </MenuLink>
          </Menu>
        </Navbar>
        <Searchbar>
          <div>
            <input placeholder="Busca tu nuevo inmueble..." />
          </div>
          <SelectType>
            <option>Tipo de inmueble</option>
            <option>Casa</option>
            <option>Departamento</option>
            <option>Local comercial</option>
          </SelectType>
          <SelectCity>
            <option>Ubicacion</option>
            <option>Rio Cuarto</option>
            <option>Cordoba</option>
            <option>San Luis</option>
          </SelectCity>
          <button>
            <i class="material-icons">search</i>
          </button>
        </Searchbar>
      </Hero>
      <Dashboard />
    </div>
  );
};

export default Home;
