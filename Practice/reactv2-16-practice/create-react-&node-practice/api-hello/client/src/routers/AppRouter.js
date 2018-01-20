import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Hello from '../components/Hello';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Switch>
          
          <Route path="/hello" component={Hello}/>
        </Switch>
      </div>
    </Router>
  );
  
export default AppRouter;