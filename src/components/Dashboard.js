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

const SideMenu = styled.div`
  margin-top: 2.5rem;
  flex: 15%;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  height: 400px;
  ul {
    list-style: none;
    margin-top: 5px;
    padding: 5px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    margin-left: 0px;
  }
`;

const Content = styled.div`
  flex: 85%;
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
    <SideMenu>
      <h5>bread/crumbs</h5>
      <h3>Front Page</h3>
      <h4>Ordenar publicaciones</h4>

      <h4>Tipo de inmueble</h4>
      <ul>
        <li>Casa</li>
        <li>Departamento</li>
        <li>Oficina</li>
      </ul>
      <h4>Cantidad de habitaciones</h4>
      <ul>
        <li>Monoambiente</li>
        <li>1 habitacion</li>
        <li>2 habitaciones</li>
        <li>Mas de 2 habitaciones</li>
      </ul>
      <h4>Ubicación</h4>
      <ul>
        <li>Centro</li>
        <li>Microcentro</li>
        <li>Macrocentro</li>
      </ul>
      <h4>Precio</h4>
      <ul>
        <li>Caro</li>
        <li>Muy Caro</li>
        <li>Carisimo</li>
      </ul>
    </SideMenu>
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
