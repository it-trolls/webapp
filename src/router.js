import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/** Redux */
import { Provider } from 'react-redux';
import store from './store';

/** Components */
import Menu from './components/Menu';
import Home from './components/hoc/layout';
import Login from './components/RegisterLogin/Login';
import Register from './components/RegisterLogin/Register';

const Routes = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default Routes;
