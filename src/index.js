import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import "antd/dist/antd.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
