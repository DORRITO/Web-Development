import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {Session} from 'meteor/session';
// import PropTypes from 'prop-types';

import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

/////////////////////////////////////
const history = createBrowserHistory({
  forceRefresh: true
});////////////////////////////////////

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];

///////////////authenticate page pushes/////////////
export const onAuthChange = (isAuthenticated) => {
  //location shows the url path '/name'
  const pathname = location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    history.replace('/dashboard');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    history.replace('/');
  }
}//////////////////////////////////////////////

export const routes = (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/dashboard/:id" component={Dashboard} />
        <Route path="*" component={NotFound}/>
      </Switch>
  </BrowserRouter>
  // <BrowserRouter><Link path="/links" /></BrowserRouter>
);
