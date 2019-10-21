import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Eye from "@material-ui/icons/Visibility";
import Chip from "@material-ui/core/Chip";
import Kitchen from "@material-ui/icons/Kitchen";
import Bathtub from "@material-ui/icons/Bathtub";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import imagen from "../../../assets/citybg.jpg";

const Card = styled.div`
  width: 332px;
  height: 460px;
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

const Image = styled.div`
  height: 60%;
  background-image: url(${imagen});
  background-size: cover;
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
      <Image />
      <Content>
        <div className={classes.propertyState}>
          <Chip label="En Alquiler" color="primary" />
        </div>
        <div className="title">
          <h2>Casa barrio centro</h2>
        </div>
        <div className={classes.propertyTags}>
          <Chip label="2 cocinas" icon={<Kitchen />} />
          <Chip label="3 baños" icon={<Bathtub />} />
          <Chip label="3 baños" icon={<Bathtub />} />
          <Chip label="3 baños" icon={<Bathtub />} />
          <Chip label="3 baños" icon={<Bathtub />} />
          <Chip label="3 baños" icon={<Bathtub />} />
        </div>
        <div className={classes.propertyPrice}>
          <Chip
            variant="outline"
            label="$4000"
            icon={<MonetizationOnIcon />}
          ></Chip>
        </div>
      </Content>
      <div className="overlay">
        <div className="text">
          <Chip label="VER DETALLES" icon={<Eye />}></Chip>
        </div>
      </div>
    </Card>
  );
};

export default Anuncio;
