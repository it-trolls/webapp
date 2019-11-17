import React from "react";
import { useDispatch } from "react-redux";
import Routes from "./router";
import {BrowserRouter as Router} from "react-router-dom"
import * as userActions from "./store/actions/userActions"

const App = (props) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(userActions.authCheckSate());
  },[])
  return(
    <Router>
      <Routes />
    </Router>
  )
}

export default App;