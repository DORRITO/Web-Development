import React from 'react';
import {Meteor} from 'meteor/meteor';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import {Session} from 'meteor/session';

import Dashboard from './Dashboard';
import Signup from './Signup';
import Login from './Login';

////////////go to note id////////////
const onEnterNotePage = (nextState) => {
  Session.set('selectedNoteId', nextState.params.id);
};/////////////////////////////////////

///////////clear selected note////////////
const onLeaveNotePage = (nextState) => {
  Session.set('selectedNoteId', undefined);
};/////////////////////////////////////

////////////////////check what page user is on/////////////////////////
export const onAuthChange = (isAuthenticated, currentPagePrivacy) => {
  const isUnauthenticatedPage = currentPagePrivacy === 'unauth';
  const isAuthenticatedPage = currentPagePrivacy === 'auth';

  //if its authenticated, go to logout page, if its not, go to signup page!
  if(isUnauthenticatedPage && isAuthenticated){
    history.replace('/dashboard');
  } else if(isAuthenticatedPage && !isAuthenticated){
    history.replace('/login');
  }
};/////////////////////////////////////////////////////////////////////

////////when a page url is changed///////
export const globalOnChange = (prevState, nextState) => {
  globalOnEnter(nextState);
};////////////////////////////////////////

////////when a page is entered////////////
export const globalOnEnter = (nextState) => {
  const lastRoute = nextState.routes[nextState.routes.length -1];
  Session.set('currentPagePrivacy', lastRoute.privacy);
};////////////////////////////////////////

export const App=(
  <BrowserRouter>
    {/* <Route onEnter={globalOnEnter} onChange={globalOnChange}> */}
      <div>
        <Switch>
          <Route exact path="/" component={Signup} privacy="unauth" />
          <Route exact path="/login" component={Login} privacy="unauth" />
          <Route exact path="/dashboard" component={Dashboard} privacy="auth" />
          <Route exact path="/dashboard/:id" component={Dashboard} privacy="auth" onEnter={onEnterNotePage} onLeave={onLeaveNotePage}/>
          <Route path="*" component={Signup} />
        </Switch>
      </div>
    {/* </Route> */}
  </BrowserRouter>
)
