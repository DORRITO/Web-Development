import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from './../App';
import About from './../components/About';
import Contact from './../components/Contact';
import Header from './../components/Header';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={App} />
        </Switch>
      </div>
    </Router>
  );
  
export default AppRouter;