import React from "react";
import { Route } from "react-router-dom";
import Nav from "../components/Nav/Nav";

const routeNav = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={() => (
        <>
          <Nav />
          <Component />
        </>
      )}
    />
  );
};

export default routeNav;
