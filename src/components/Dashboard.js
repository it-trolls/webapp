import React from "react";
import Anuncio from "./Anuncio";
import styled from "styled-components";

const Layout = styled.main`
  margin-top: 2rem;
  padding-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #eee;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  flex: 100%;
  margin: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 10px;
`;

const Dashboard = props => (
  <Layout>
    <Content>
      <h2 style={{ textAlign: "center" }}>Anuncios destacados</h2>
      <Grid>
        <Anuncio></Anuncio>
        <Anuncio></Anuncio>
        <Anuncio></Anuncio>
        <Anuncio></Anuncio>
        <Anuncio></Anuncio>
      </Grid>
    </Content>
  </Layout>
);

export default Dashboard;
