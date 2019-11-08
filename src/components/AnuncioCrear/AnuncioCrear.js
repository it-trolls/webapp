import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Container,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider
} from "@material-ui/core";
import logo from "../../assets/logo.png";
import Nav from "../Nav/Nav";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { DropzoneArea } from "material-ui-dropzone";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(5)
  },
  root: {
    marginTop: "6rem",
    marginBottom: "2rem",
    padding: theme.spacing(3, 2),
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
  },
  textField: {
    margin: theme.spacing(1)
  },
  button: {
    float: "right",
    margin: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const CrearAnuncio = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    title: "",
    description: "",
    status: "",
    type: "",
    price: 0,
    antiquity: 0,
    coveredArea: 0,
    address: "",
    neighborhood: "",
    floor: "",
    kitchen: 0,
    bathrooms: 2,
    backyard: false,
    rooms: 2,
    image: ""
  });

  const handleChange = name => event => {
    if (event.target.type === "checkbox") {
      setValues({ ...values, [name]: event.target.checked });
    } else {
      setValues({ ...values, [name]: event.target.value });
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("Submiting");
    console.log(values);
  };
  return (
    <>
      <Container maxWidth="md">
        <Nav side={false} />

        <div className={classes.root}>
          <Typography variant="h5" component="h3" align="center">
            <img src={logo} alt="Inmob app logo" height="64px" />
            Crear anuncio
          </Typography>

          <form
            className={classes.container}
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
          >
            <TextField
              id="standard-full-width"
              label="Titulo"
              value={values.title}
              onChange={handleChange("title")}
              fullWidth
              margin="normal"
              className={classes.textField}
            />
            <TextField
              id="standard-multiline-flexible"
              label="Descripción"
              multiline
              rowsMax="4"
              value={values.description}
              onChange={handleChange("description")}
              className={classes.textField}
              margin="normal"
              fullWidth
            />
            <Divider />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="simple-status">Contrato</InputLabel>
              <Select
                value={values.status}
                onChange={handleChange("status")}
                inputProps={{
                  name: "status",
                  id: "status-simple"
                }}
              >
                <MenuItem value={"lease"}>Alquiler</MenuItem>
                <MenuItem value={"sell"}>Venta</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="simple-type">Inmueble</InputLabel>
              <Select
                value={values.type}
                onChange={handleChange("type")}
                inputProps={{
                  name: "type",
                  id: "status-type"
                }}
              >
                <MenuItem value={"apartment"}>Departamento</MenuItem>
                <MenuItem value={"house"}>Casa</MenuItem>
                <MenuItem value={"office"}>Oficina</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="standard-price"
              label="Precio"
              value={values.price}
              onChange={handleChange("price")}
              type="number"
              className={classes.textField}
              margin="normal"
            />
            <Divider />
            <TextField
              id="standard-address"
              label="Direccion"
              className={classes.textField}
              value={values.address}
              onChange={handleChange("address")}
              margin="normal"
            />
            <TextField
              id="standard-neighborhood"
              label="Barrio"
              className={classes.textField}
              value={values.neighborhood}
              onChange={handleChange("neighborhood")}
              margin="normal"
            />

            <TextField
              id="standard-floor"
              label="Piso"
              value={values.floor}
              onChange={handleChange("floor")}
              type="text"
              className={classes.textField}
              margin="normal"
            />
            <Divider />
            <TextField
              id="standard-coveredArea"
              label="Metros cuadrados"
              value={values.coveredArea}
              onChange={handleChange("coveredArea")}
              type="number"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="standard-antiquity"
              label="Antiguedad"
              value={values.antiquity}
              onChange={handleChange("antiquity")}
              type="number"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="standard-rooms"
              label="Habitaciones"
              value={values.rooms}
              onChange={handleChange("rooms")}
              type="number"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="standard-bathrooms"
              label="Baños"
              value={values.bathrooms}
              onChange={handleChange("bathrooms")}
              type="number"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="standard-kitchen"
              label="Cocinas"
              value={values.kitchen}
              onChange={handleChange("kitchen")}
              type="number"
              className={classes.textField}
              margin="normal"
            />

            <FormControlLabel
              className={classes.textField}
              control={
                <Checkbox
                  checked={values.backyard}
                  onChange={handleChange("backyard")}
                  value={values.backyard}
                  color="primary"
                />
              }
              label="Patio"
            />
            <Divider />
            <DropzoneArea />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Crear
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              component={NavLink}
              to="main/dashboard"
            >
              Cancelar
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

CrearAnuncio.propTypes = {
  edit: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.string,
  type: PropTypes.string,
  address: PropTypes.string,
  neighborhood: PropTypes.string,
  rooms: PropTypes.number,
  floor: PropTypes.string,
  kitchen: PropTypes.number,
  bathrooms: PropTypes.number,
  backyard: PropTypes.bool,
  antiquity: PropTypes.number,
  coveredArea: PropTypes.number
};

export default CrearAnuncio;
