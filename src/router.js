import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/** Redux */
import { Provider } from "react-redux";
import store from "./store";

/** Components */
import Menu from "./components/Menu";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Admin from "./components/Admin/Admin";
import AnuncioDetalle from "./components/AnuncioDetalle/AnuncioDetalle";
import CrearAnuncio from "./components/CrearAnuncio/CrearAnuncio";

const Routes = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/admin" component={Admin} />
            <Route path="/detalle" component={AnuncioDetalle} />
            <Route path="/nuevo" component={CrearAnuncio} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default Routes;
