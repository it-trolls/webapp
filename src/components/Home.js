import React from "react";
import styled from "styled-components";
import Dashboard from "./AnuncioList/AnuncioList";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from "../assets/logo.png";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <CssBaseline />
      <Hero />
    </div>
  );
};

export default Home;
