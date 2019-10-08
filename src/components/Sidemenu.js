import React from "react";
import styled from "styled-components";

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

const Sidemenu = props => (
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
);

export default Sidemenu;
