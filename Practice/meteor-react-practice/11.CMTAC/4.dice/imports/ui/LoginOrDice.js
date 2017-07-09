import React from 'react';
import PropTypes from 'prop-types';
import {Accounts} from 'meteor/accounts-base';
import {Link} from 'react-router';
import {Meteor} from 'meteor/meteor';

import Dice from './Dice';

export default class LoginOrDice extends React.Component{

  //////////////////////////////////if logged in, show dice! otherwise showlogin form///////////////////////
  showLogin(){
    const showLoginStatus = !!Meteor.userId() ? <Dice /> : <Link to="/login">Login</Link>;
    return <div>{showLoginStatus}</div>
  }/////////////////////////////////////////////////////////////////////////////////////////////////////////

  render(){
    return(
      <div>
        {this.showLogin()}
      </div>
    );
  }
};
