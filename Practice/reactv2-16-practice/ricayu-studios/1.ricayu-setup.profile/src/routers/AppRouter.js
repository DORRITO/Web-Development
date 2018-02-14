import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from './../App';
import About from './../components/About';
import Contact from './../components/Contact';
import Header from './../components/Header';
import Portraits from './../components/services/Portraits';
import Weddings from './../components/services/Weddings';
import Events from './../components/services/Events';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portraits" component={Portraits} />
          <Route path="/weddings" component={Weddings} />
          <Route path="/events" component={Events} />
          <Route path="*" component={App} />
        </Switch>
      </div>
    </Router>
  );
  
export default AppRouter;