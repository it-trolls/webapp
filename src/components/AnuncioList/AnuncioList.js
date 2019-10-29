import React from "react";
import Anuncio from "./Anuncio/Anuncio";
import styled from "styled-components";
import Side from "./SideMenu/Sidemenu";
import Paper from "@material-ui/core/Paper";
import Nav from "../Nav/Nav";

const Layout = styled.main`
  margin-top: 4rem;
  padding-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  flex: 80%;
  margin: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 10px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Dashboard = props => {
  const handleDrawerToggle = () => {
    props.openSideBar();
  };

  return (
    <>
      <Layout>
        <Side
          mobileOpen={props.sideBar}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Content>
          <Nav
            side={true}
            sideBar={props.sideBar}
            openSideBar={props.openSideBar}
          />
          <Grid>
            <Anuncio></Anuncio>
            <Anuncio></Anuncio>
            <Anuncio></Anuncio>
            <Anuncio></Anuncio>
            <Anuncio></Anuncio>
          </Grid>
        </Content>
      </Layout>
    </>
  );
};

export default Dashboard;
