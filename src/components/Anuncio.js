import React from "react";
import styled from "styled-components";
import Badge from "./Badge";

const Card = styled.div`
  height: 400px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Image = styled.div`
  height: 60%;
  background: #ccc;
`;

const Content = styled.div`
  padding: 1rem;
  height: 40%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: "title title title title" "badges badges badges badges" "type type . status" "price . details details";
`;

const Anuncio = props => (
  <Card>
    <Image />
    <Content>
      <div class="title" style={{ gridArea: "title" }}>
        <h2>Casa re copada</h2>
      </div>
      <div class="badges" style={{ gridArea: "badges" }}>
        <Badge>asdasd</Badge>
        <Badge>asdas</Badge>
      </div>
      <div class="type" style={{ gridArea: "type" }}>
        Casa
      </div>
      <div class="status" style={{ gridArea: "status" }}>
        En Alquiler
      </div>
      <div class="price" style={{ gridArea: "price" }}>
        <h3>$4000</h3>
      </div>
      <div class="details" style={{ gridArea: "details" }}>
        <button style={{ width: "100%" }}>Ver mas</button>
      </div>
    </Content>
  </Card>
);

export default Anuncio;
