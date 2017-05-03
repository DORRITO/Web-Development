import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import {Tracker} from 'meteor/tracker';
import createBrowserHistory from 'history/createBrowserHistory';
// import PropTypes from 'prop-types';

import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';

const history = createBrowserHistory({
  forceRefresh: true
});
const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

const routes = (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/links" component={Link}/>
        <Route path="*" component={NotFound}/>
      </Switch>
  </BrowserRouter>
  // <BrowserRouter><Link path="/links" /></BrowserRouter>
);
//tracker is tracking anytime something in the database changes!
Tracker.autorun(() => {
  // takes a falsy or truthy value and makes it a boolean!  straight false or true.
  // Meteor.userid is checking the id value
  const isAuthenticated = !!Meteor.userId();
  console.log('isauthenticated =', isAuthenticated);
  //location shows the url path '/name'
  const pathname = location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    history.replace('/links');
  }
  else if (isAuthenticatedPage && !isAuthenticated) {
    history.replace('/');
  }
  //if authenticated page, redirect to /links
    //browserHistory.push
  //if on authenticated and not logged in, redirect to /
    //browserHistory.push
  //no else
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
