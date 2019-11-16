import React, {useEffect} from "react";
import styled from "styled-components";
import Nav from "../Nav/Nav";
import { Chip, Typography, Button } from "@material-ui/core";
import { Hotel, Bathtub, LocalFlorist, Kitchen } from "@material-ui/icons";
import axios from 'axios';
import {useQuery} from '../queryHelper';
import {NavLink} from 'react-router-dom'

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
  const query = useQuery()
  const [post, setPost] = React.useState({})
  
  React.useEffect(() => {
    const id = query.get('id')
    const url = `http://localhost:3010/api/v1/properties/${id}`
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


  return (
    <>
      <Nav side={true} />
      <Layout>
        <div className="top">
          <div className="images">
            <img src="https://picsum.photos/id/522/400/400" width="100%"></img>
          </div>
          <div class="categories">
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
            
            <div class="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13364.790554500372!2d-64.34902!3d-33.13017195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sar!4v1570940128314!5m2!1sen!2sar"
                width="400"
                height="300"
                frameborder="0"
              ></iframe>
            </div>
            <NavLink to="/mensajes/nuevo?id=asdasd">
            <Button variant="contained" color="primary" fullWidth>
              Consultar
            </Button>
            </NavLink>
          </div>
        </div>
        <div className="bottom">
          <Typography>Descripción</Typography>
          <Typography variant="p">
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
