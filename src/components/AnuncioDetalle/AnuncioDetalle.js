import React from "react";
import styled from "styled-components";
import Badge from "../Badge";

const Layout = styled.div`
  margin: 2rem auto;
  width: 80%;
  display: grid;
  height: 600px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "Images Images Categories" "Images Images Map" "Description Description Description";
  grid-gap: 5px;
  .Images {
    grid-area: Images;
  }

  .Categories {
    grid-area: Categories;
    text-align: center;
  }

  .Map {
    grid-area: Map;
  }

  .Description {
    grid-area: Description;
  }
`;

const detalleAnuncio = () => {
  return (
    <Layout>
      <div class="Images">
        <img
          src="https://picsum.photos/id/522/400/400"
          height="100%"
          width="100%"
        ></img>
      </div>
      <div class="Categories">
        <h4>Especificaciones</h4>
        <Badge>Bad</Badge>
        <Badge>Good</Badge>
      </div>
      <div class="Map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13364.790554500372!2d-64.34902!3d-33.13017195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sar!4v1570940128314!5m2!1sen!2sar"
          width="400"
          height="300"
          frameborder="0"
        ></iframe>
      </div>
      <div class="Description">
        <h2>Descripción</h2>
      </div>
    </Layout>
  );
};

export default detalleAnuncio;
