import React from "react";
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
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/auth"
            component={() => (
              <Auth
                onLogin={this.props.onLogin}
                onRegister={this.props.onRegister}
                isAuthenticated={this.props.isAuthenticated}
              />
            )}
          />
          <Route path="/mensajes" exact component={Mensajes} />
          <Route path="/mensajes/nuevo" component={CrearMensaje} />
          <Route path="/mensajes/detalle" component={DetalleMensaje} />
          <Route path="/dashboard/detalle" component={AnuncioDetalle} />
          <Route
            path="/dashboard"
            component={() => (
              <Dashboard
                sideBar={this.props.sideBar}
                openSideBar={this.props.sideBarOpen}
                isAuthenticated={this.props.isAuthenticated}
                logout={this.props.onLogout}
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
    isAuthenticated: state.user.token ? true : false,
    showingNav: state.user.showingNav,
    sideBar: state.user.sideBar,
    posts: state.api.posts,
    messages: state.api.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sideBarOpen: () => dispatch(actions.openSideBar()),
    onLogin: payload => dispatch(actions.authLogin(payload)),
    onRegister: payload => dispatch(actions.authSignup(payload)),
    onLogout: () => dispatch(actions.authLogout()),
    showNav: () => dispatch(actions.showNav()),
    hideNav: () => dispatch(actions.hideNav())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Routes);
