import React from "react";
import styled from "styled-components";

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
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
`;

const Anuncio = props => (
  <Card>
    <Image />
    <Content>
      <small style={{ gridArea: "1 / 1 / 2 / 3" }}>$4500</small>
      <h3 style={{ gridArea: "2 / 1 / 3 / 3" }}>$4000</h3>
      <h4 style={{ gridArea: "2 / 3 / 3 / 5" }}>20% off</h4>
      <h5 style={{ gridArea: "3 / 1 / 4 / 5" }}>20 cuotas sin interes</h5>
      <p style={{ gridArea: "4 / 1 / 6 / 6" }}>
        This a dummy description for anuncio cards
      </p>
    </Content>
  </Card>
);

export default Anuncio;
