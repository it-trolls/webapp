import React from "react";
import styled from "styled-components";
import Dashboard from "./AnuncioList/AnuncioList";
import BotonCrear from "./BotonCrear/BotonCrear";
import Nav from "./Nav/Nav";
import logo from "../assets/logo.png";
import Hero from "./Hero/Hero";
import Crear from "./CrearAnuncio/CrearAnuncio";

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "#eee"
      }}
    >
      <Hero />
    </div>
  );
};

export default Home;
