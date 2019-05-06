import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/** Components */
import Menu from './components/Menu';
import Home from './components/hoc/layout';
import Login from './components/RegisterLogin/login';
import Register from './components/RegisterLogin/register';

const Routes = () => {
  return (
    <Router>
      <Fragment>
        <Menu />
        <Switch>
          <Route path='/signIn' component={Login} />
          <Route path='/signUp' component={Register} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default Routes;
