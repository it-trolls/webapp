import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Eye from "@material-ui/icons/Visibility";
import Chip from "@material-ui/core/Chip";
import Kitchen from "@material-ui/icons/Kitchen";
import Bathtub from "@material-ui/icons/Bathtub";

const Card = styled.div`
  height: 460px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: relative;

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
  // display: grid;
  // grid-template-columns: 1fr 1fr 1fr 1fr;
  // grid-template-rows: 1fr 1fr 1fr 1fr;
  // grid-template-areas: "title title title title" "badges badges badges badges" "status . . ." "price . . details";
  // grid-gap: 5%;
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
    bottom: "40%"
  },
  propertyPrice: {
    position: "absolute",
    left: "15px",
    bottom: "10px"
  }
}));

const Anuncio = props => {
  const classes = useStyles();
  return (
    <Card>
      <Image />
      <Content>
        <div className="title">
          <h2>Casa re copada</h2>
        </div>
        <div className="badges">
          <Chip label="2 cocinas" icon={<Kitchen />} />
          <Chip label="3 baños" icon={<Bathtub />} />
          <Chip label="3 baños" icon={<Bathtub />} />
          <Chip label="3 baños" icon={<Bathtub />} />
          <Chip label="3 baños" icon={<Bathtub />} />
          <Chip label="3 baños" icon={<Bathtub />} />
        </div>
        <div className={classes.propertyState}>
          <Chip label="En Alquiler" color="primary" />
        </div>
        <div className={classes.propertyPrice}>
          <Typography variant="h5" color="primary">
            $4000
          </Typography>
        </div>
        <Fab variant="extended" aria-label="detalles" className={classes.fab}>
          <Eye />
        </Fab>
      </Content>
    </Card>
  );
};

export default Anuncio;
