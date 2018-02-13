import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from './../App';
import Home from './../components/Home';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/home" component={Home}/>
          <Route path="*" component={App} />
        </Switch>
      </div>
    </Router>
  );
  
export default AppRouter;