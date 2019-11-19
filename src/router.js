import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
} from "react-router-dom";

/** Redux */
import { connect } from "react-redux";
import * as actions from "./store/actions/userActions";
/** Components */
import Dashboard from "./components/AnuncioList/AnuncioList";
import Home from "./components/Home";
import Auth from "./components/Auth";
import AnuncioDetalle from "./components/AnuncioDetalle/AnuncioDetalle";
import CrearAnuncio from "./components/AnuncioCrear/AnuncioCrear";
import Mensajes from "./components/MensajeList/MensajeList";
import CrearMensaje from "./components/MensajeCrear/MensajeCrear";
import DetalleMensaje from "./components/MensajeDetalle/MensajeDetalle";
import BorrarArticulo from "./components/BorrarAnuncio/BorrarAnuncio";
import Nav from "./components/Nav/Nav";

const Routes = () => {
  const history = useHistory();
  return (
    <>
      {window.location.pathname === "/auth" ||
      window.location.pathname === "/" ? null : (
        <Nav />
      )}
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/mensajes" exact component={Mensajes} />
        <Route path="/mensajes/nuevo" component={CrearMensaje} />
        <Route path="/mensajes/detalle/:msgId" component={DetalleMensaje} />
        <Route path="/dashboard/borrar" component={BorrarArticulo} />
        <Route path="/dashboard/nuevo" component={CrearAnuncio} />
        <Route path="/dashboard/detalle" component={AnuncioDetalle} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
};

export default Routes;
