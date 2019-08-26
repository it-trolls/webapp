import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/** Redux */
import { Provider } from 'react-redux';
import store from './store';

/** Components */
import Menu from './components/Menu';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin/Admin';

const Routes = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route path='/signIn' component={Login} />
            <Route path='/signUp' component={Register} />
            <Route path='/admin' component={Admin} />
            <Route path='/' exact component={Home} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default Routes;
