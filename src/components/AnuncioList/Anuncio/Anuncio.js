import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import {
  Delete,
  Edit,
  Hotel,
  LocalFlorist,
  Visibility,
  Kitchen,
  Bathtub,
  MonetizationOn
} from "@material-ui/icons";
import { Chip } from "@material-ui/core/";
import { NavLink } from "react-router-dom";
import imagen from "../../../assets/citybg.jpg";

const Card = styled.div`
  width: 332px;
  height: 430px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: relative;

  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: pointer;
    .overlay {
      opacity: 0.9;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: black;
  }

  .text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;

const Content = styled.div`
  padding: 1rem;
  height: 40%;
`;

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    position: "absolute",
    right: "5px",
    bottom: "0px"
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  propertyState: {
    position: "absolute",
    right: "5px",
    bottom: "41%"
  },
  propertyPrice: {
    position: "absolute",
    right: "15px",
    bottom: "10px"
  },
  propertyTags: {
    marginBottom: theme.spacing(3)
  }
}));

const Anuncio = props => {
  const classes = useStyles();
  return (
    <Card>
      <img
        src={props.picture}
        alt={props.title + " image"}
        style={{ height: "60%", width: "332px", backgroundSize: "cover" }}
      />
      <Content>
        <div className={classes.propertyState}>
          <Chip label={props.contract === 'rental' ? 'Alquiler' : 'Venta'} color="primary" />
        </div>
        <div className="title">
          <h2>{props.title}</h2>
        </div>
        <div className={classes.propertyTags}>
          <Chip label={props.bedrooms} icon={<Hotel />} />
          <Chip label={props.kitchens} icon={<Kitchen />} />
          <Chip label={props.bathrooms} icon={<Bathtub />} />
          <Chip label={props.backyard} icon={<LocalFlorist />} />
        </div>
        <div className={classes.propertyPrice}>
          <Chip
            variant="outline"
            label={props.price}
            icon={<MonetizationOn />}
          ></Chip>
        </div>
      </Content>
      <div className="overlay">
        <div className="text">
          <NavLink to={`dashboard/detalle?id=${props.id}`}>
            <Chip
              label="VER DETALLES"
              icon={<Visibility />}
              style={{ width: "157px", cursor: "pointer" }}
            ></Chip>
          </NavLink>
          {props.username && props.username === props.created_by ? (
            <>
              <NavLink to={`dashboard/nuevo?id=${props.id}`}>
                <Chip
                  label="EDITAR ANUNCIO"
                  icon={<Edit />}
                  style={{ width: "157px" }}
                />
              </NavLink>
              <NavLink to={`dashboard/borrar/${props.id}`}>
                <Chip
                  label="BORRAR ANUNCIO"
                  icon={<Delete />}
                  style={{ width: "157px" }}
                />
              </NavLink>
            </>
          ) : null}
        </div>
      </div>
    </Card>
  );
};

Anuncio.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  rooms: PropTypes.number.isRequired,
  kitchen: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  backyard: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  created_by: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default Anuncio;
