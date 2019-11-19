import React from "react";
import styled from "styled-components";
import { Chip, Typography, Button } from "@material-ui/core";
import { Hotel, Bathtub, Kitchen } from "@material-ui/icons";
import axios from "axios";
import { useQuery } from "../queryHelper";
import { NavLink } from "react-router-dom";
import defaultimg from "../../assets/noimg.png";
import { useSelector } from "react-redux";

const Layout = styled.div`
  margin: 6rem auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 80%;
  display: flex;
  flex-direction: column;

  .top {
    display: flex;
  }

  .images {
    flex: 50%;
  }

  .categories {
    flex: 50%
    padding: 10px;
    text-align: center;
  }

  .map {
    margin-bottom: 5px;
  }

  .bottom {
    padding: 15px;
  }
`;

const DetalleAnuncio = props => {
  const query = useQuery();
  const userId = useSelector(state => state.user.userId);
  const [post, setPost] = React.useState({});

  React.useEffect(() => {
    const id = query.get("id");
    const url = `http://localhost:3010/api/v1/properties/${id}`;
    axios
      .get(url)
      .then(res => {
        setPost(res.data);
      })
      .catch(err => {
        //dispatch(getAnunciosFail(error))
        console.log(err);
      });
  }, []);

  console.log(post)

  return (
    <>
      <Layout>
        <div className="top">
          <div className="images">
            <img
              src={
                post.pictures
                  ? `http://localhost:3010/${post.pictures[0]}`
                  : defaultimg
              }
              width="100%"
              alt="Imagen del inmueble"
            />
          </div>
          <div className="categories">
            <Typography component="h1" variant="h4" gutterBottom>
              {post.title ? post.title : "Titulo default"}
            </Typography>
            <Typography component="h1" variant="h4" gutterBottom>
              ${post.price ? post.price : 5000}
            </Typography>

            <Typography variant="h6" gutterBottom>
              Especificaciones
            </Typography>
            <Chip
              label={post.bedrooms ? post.bedrooms : " habitacion"}
              icon={<Hotel />}
            />
            <Chip
              label={post.kitchens ? post.kitchens : " cocina"}
              icon={<Kitchen />}
            />
            <Chip
              label={post.bathrooms ? post.bathrooms : " baño"}
              icon={<Bathtub />}
            />

            <div className="map">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCsHPGB0Zmv3468gMFuk4dbKmuXoacid0U&q=${encodeURIComponent(
                  post.address
                )}`}
                width="400"
                height="300"
                frameBorder="0"
                title="mapa de propiedades"
              ></iframe>
            </div>
            {post.created_by !== userId ? (
              <NavLink to={`/mensajes/nuevo?id=${post.created_by}&propertyId=${post._id}`}>
                <Button variant="contained" color="primary" fullWidth>
                  Consultar
                </Button>
              </NavLink>
            ) : null}
          </div>
        </div>
        <div className="bottom">
          <Typography>Descripción</Typography>
          <Typography variant="body1">
            {post.description
              ? post.description
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis enim tellus, tempor pulvinar augue pharetra eget. Fusce fermentum, est vel tincidunt gravida, metus lacus commodo arcu, at lobortis arcu est non lacus. Aliquam in volutpat diam. Donec sit amet cursus ligula, ut maximus sem. Phasellus metus enim, aliquam a dapibus a, bibendum at est. Pellentesque ac nibh dolor. Phasellus vel urna pellentesque, suscipit purus eu, porta purus. Nulla elementum erat vel nisl aliquam posuere. Pellentesque malesuada, elit at dapibus elementum, nisl orci aliquet quam, et semper odio elit feugiat nibh. Fusce sed turpis ultrices, ultricies felis egestas, elementum est. Sed at nisl sit amet sem fermentum dapibus. Donec faucibus tempor tortor, et malesuada magna scelerisque vel. Suspendisse iaculis dapibus justo. Nullam egestas elit nec est feugiat, eu efficitur quam facilisis. Nullam quis volutpat nisi."}
          </Typography>
        </div>
      </Layout>
    </>
  );
};

export default DetalleAnuncio;
