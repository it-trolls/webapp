import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const BotonCrear = props => {
  const classes = useStyles();
  return (
    <Fab variant="extended" aria-label="delete" className={classes.fab}>
      <NoteAddIcon className={classes.extendedIcon} />
      Crear anuncio
    </Fab>
  );
};

export default BotonCrear;
