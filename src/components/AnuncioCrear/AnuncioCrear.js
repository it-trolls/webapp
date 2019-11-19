import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Container,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider
} from "@material-ui/core";
import logo from "../../assets/logo.png";
import { NavLink, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import * as apiActions from '../../store/actions/apiActions'
import {useDispatch, useSelector} from 'react-redux';
import {useQuery} from '../queryHelper'
import axios from 'axios'

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
  const query = useQuery();
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(state => state.user.token)
  const post = useSelector(state => state.api.post)
  const [values, setValues] = React.useState({
    title: "",
    description: "",
    contract: "",
    type: "",
    price: 0,
    antiquity: 0,
    coveredArea: 0,
    address: "",
    neighborhood: "",
    floor: "",
    kitchens: 0,
    bathrooms: 0,
    bedrooms: 0,
    pictures: null,}
  );

  const handleChange = name => event => {
    if(name === 'pictures'){
      setValues({...values, [name]: event.target.files[0]})
    }else{
      setValues({ ...values, [name]: event.target.value });
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData()
    for(let value in values){
      formData.append(value, values[value])
    }
    if(query.get("id")){
      dispatch(apiActions.updateAnuncio(query.get("id"), values, token))
    }else{
      dispatch(apiActions.createAnuncio(formData, token))
    }
    setTimeout(()=>{
      history.push('/dashboard')
    }, 1000)
  };

  React.useEffect(()=> {
    if(query.get("id")){
      axios
      .get(`http://localhost:3010/api/v1/properties/${query.get("id")}`)
      .then(res => {
        setValues({...res.data})
      })
      .catch(error => {
        console.log(error);
      });
    }
  }, [])
  return (
    <>
      <Container maxWidth="md">

        <div className={classes.root}>
          <Typography variant="h5" component="h3" align="center">
            <img src={logo} alt="Inmob app logo" height="64px" />
            {query.get("id") ? "Editar articulo" : "Crear anuncio"}
          </Typography>

          <form
            className={classes.container}
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
            encType="multipart/form-data"
            id="create-form"
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
                value={values.contract}
                onChange={handleChange("contract")}
                inputProps={{
                  name: "contract",
                  id: "contract-simple"
                }}
              >
                <MenuItem value={"rental"}>Alquiler</MenuItem>
                <MenuItem value={"sale"}>Venta</MenuItem>
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
                <MenuItem value={"department"}>Departamento</MenuItem>
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
              id="standard-bedrooms"
              label="Habitaciones"
              value={values.bedrooms}
              onChange={handleChange("bedrooms")}
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
              id="standard-kitchens"
              label="Cocinas"
              value={values.kitchens}
              onChange={handleChange("kitchens")}
              type="number"
              className={classes.textField}
              margin="normal"
            />

            <Divider />
            <input type="file" name="file" onChange={handleChange("pictures")} />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              {query.get("id") ? "Editar" : "Crear"}
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
