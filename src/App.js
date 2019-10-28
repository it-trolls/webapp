import React from "react";
import { connect } from "react-redux";
import Router from "./router";
import Nav from "./components/Nav/Nav";

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Router />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
