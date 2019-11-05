import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
import Nav from "./components/Nav/Nav";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/mensajes" exact component={Mensajes} />
          <Route path="/mensajes/nuevo" component={CrearMensaje} />
          <Route path="/mensajes/detalle" component={DetalleMensaje} />
          <Route path="/detalle" component={AnuncioDetalle} />
          <Route
            path="/dashboard"
            component={() => (
              <Dashboard
                sideBar={this.props.sideBar}
                openSideBar={this.props.sideBarOpen}
              />
            )}
          />
          <Route path="/nuevo" component={CrearAnuncio} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    sideBar: state.user.sideBar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sideBarOpen: () => dispatch(actions.openSideBar())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
