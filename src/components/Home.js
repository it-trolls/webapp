import React from "react";
import styled from "styled-components";
import Dashboard from "./AnuncioList/AnuncioList";
import CssBaseline from "@material-ui/core/CssBaseline";
import Nav from "./Nav/Nav";
import logo from "../assets/logo.png";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "#eee"
      }}
    >
      <Dashboard />
    </div>
  );
};

export default Home;
