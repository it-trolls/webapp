import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import logo from "../../assets/logo.png";
import Nav from "../Nav/Nav";
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
  }
}));

const CrearAnuncio = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    address: "",
    location: "",
    realState: "5d6ca80c5d042120e472436f",
    price: "",
    descripcion:
      "adress, location y realState son obligatorios, tal vez ponerle el currency a el price como atributto",
    state: "available",
    garden: "true",
    antiquity: "2",
    coveredArea: "24",
    neighborhood: "",
    bathrooms: "2",
    berdrooms: "4",
    type: "house",
    images: []
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div>
      <React.Fragment>
        <Container maxWidth="md">
          <Nav side={false} />

          <div className={classes.root}>
            <Typography variant="h5" component="h3" align="center">
              <img src={logo} alt="inmob app logo" height="64px" />
              Crear anuncio
            </Typography>

            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="standard-full-width"
                label="Titulo"
                value={values.address}
                fullWidth
                margin="normal"
                className={classes.textField}
              />
              <TextField
                id="standard-multiline-flexible"
                label="Descripción"
                multiline
                rowsMax="4"
                value={values.multiline}
                onChange={handleChange("multiline")}
                className={classes.textField}
                margin="normal"
                fullWidth
              />
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
                id="standard-location"
                label="Ciudad"
                className={classes.textField}
                value={values.location}
                onChange={handleChange("location")}
                margin="normal"
              />
              <TextField
                id="standard-number"
                label="Codigo Postal"
                value={values.age}
                onChange={handleChange("age")}
                type="number"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                id="standard-number"
                label="Piso"
                value={values.age}
                onChange={handleChange("age")}
                type="text"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                id="standard-number"
                label="Habitaciones"
                value={values.age}
                onChange={handleChange("age")}
                type="number"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                id="standard-number"
                label="Baños"
                value={values.age}
                onChange={handleChange("age")}
                type="number"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                id="standard-number"
                label="Cocinas"
                value={values.age}
                onChange={handleChange("age")}
                type="number"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                id="standard-number"
                label="Patios"
                value={values.age}
                onChange={handleChange("age")}
                type="number"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                id="standard-number"
                label="Terrazas"
                value={values.age}
                onChange={handleChange("age")}
                type="number"
                className={classes.textField}
                margin="normal"
              />

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
              >
                Cancelar
              </Button>
            </form>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default CrearAnuncio;
