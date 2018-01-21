import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from '../components/App';
import About from '../components/About';
import Contact from '../components/Contact';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          </Switch>
      </div>
    </Router>
  );
  
export default AppRouter;