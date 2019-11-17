import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles(theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "100%",
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
}));

const SearchBar = props => {
  const classes = useStyles();
  const [search, setSearch] = React.useState("");
  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();
    if (search.length >= 3) {
      history.push(`/dashboard?search=${search}`);
    }
  };
  return (
    <form className={classes.search} onSubmit={onSubmit}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="¿Qué estas buscando?"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        value={search}
        onChange={e => setSearch(e.target.value)}
        inputProps={{ "aria-label": "search" }}
      />
    </form>
  );
};

export default SearchBar;
