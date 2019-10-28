import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/** Redux */
import { Provider, Connect } from "react-redux";
import store from "./store";

/** Components */
import Dashboard from "./components/AnuncioList/AnuncioList";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Admin from "./components/Admin/Admin";
import AnuncioDetalle from "./components/AnuncioDetalle/AnuncioDetalle";
import CrearAnuncio from "./components/CrearAnuncio/CrearAnuncio";
import Nav from "./components/Nav/Nav";

class Routes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Nav />
            <Switch>
              <Route path="/auth" component={Auth} />
              <Route path="/admin" component={Admin} />
              <Route path="/detalle" component={AnuncioDetalle} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/nuevo" component={CrearAnuncio} />
              <Route path="/" exact component={Home} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default Routes;
