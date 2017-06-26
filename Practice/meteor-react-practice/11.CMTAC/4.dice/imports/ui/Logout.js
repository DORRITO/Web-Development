import React from 'react';
import PropTypes from 'prop-types';
import {Accounts} from 'meteor/accounts-base';

export default class Logout extends React.Component{
  onLogout(){
    Accounts.logout();
  }
  render() {
      return(
        <div>
          <button onClick={this.onLogout.bind(this)}>Logout</button>
        </div>
      );
  }
};
