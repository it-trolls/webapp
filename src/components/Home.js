import React from "react";
import styled from "styled-components";
import Dashboard from "./Dashboard";
import background from "../assets/citybg.jpg";

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
  width: 550px;
  height: 50px;
  input {
    padding: 15px;
    width: 40%;
    height: 100%;
  }
  select {
    width: 20%;
    height: 100%;
  }
  button {
    width: 20%;
    height: 100%;
  }
`;

const Home = () => {
  return (
    <>
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
              <a>Ingresar</a>
            </MenuLink>
            <MenuLink>
              <a>FAQ</a>
            </MenuLink>
            <MenuLink>
              <a>Otro</a>
            </MenuLink>
          </Menu>
        </Navbar>
        <Searchbar>
          <input placeholder="Search..." />
          <select>
            <option>Tipo de inmueble</option>
            <option>Casa</option>
            <option>Departamento</option>
            <option>Local comercial</option>
          </select>
          <select>
            <option>Ubicacion</option>
            <option>Rio Cuarto</option>
            <option>Cordoba</option>
            <option>San Luis</option>
          </select>
          <button>Search</button>
        </Searchbar>
      </Hero>
      <Dashboard />
    </>
  );
};

export default Home;
