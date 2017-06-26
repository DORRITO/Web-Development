import React from 'react';
import PropTypes from 'prop-types';
import {Accounts} from 'meteor/accounts-base';
import {Link} from 'react-router';
import {Meteor} from 'meteor/meteor';

export default class LoginOrDice extends React.Component{

  //////////////////////////////////if logged in, show dice! otherwise showlogin form///////////////////////
  showLogin(){
    const showLoginStatus = !!Meteor.userId() ? 'this will be a dice roll' : <Link to="/login">Login</Link>;
    return <p>{showLoginStatus}</p>
  }/////////////////////////////////////////////////////////////////////////////////////////////////////////

  render(){
    return(
      <div>
        {this.showLogin()}
      </div>
    );
  }
};
