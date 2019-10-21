import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Search from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `white !important`,
      color: "white"
    }
  },
  notchedOutline: {
    borderWidth: "2px",
    borderColor: "white !important"
  },
  cssLabel: {
    color: "white"
  }
}));

const SearchBar = props => {
  const classes = useStyles();
  return (
    <TextField
      id="outlined-search"
      label="Buscar propiedad..."
      type="search"
      className={classes.textField}
      InputLabelProps={{
        classes: { root: classes.cssLabel }
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          notchedOutline: classes.notchedOutline,
          input: classes.cssLabel
        },
        startAdornment: (
          <InputAdornment position="start" color="inherit">
            <Search color="primary" />
          </InputAdornment>
        )
      }}
      margin="normal"
      variant="outlined"
      fullWidth
    />
  );
};

export default SearchBar;
