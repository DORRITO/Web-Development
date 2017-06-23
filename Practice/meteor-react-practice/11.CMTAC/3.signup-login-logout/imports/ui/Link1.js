import React from 'react';
import PropTypes from 'prop-types';
import {Accounts} from 'meteor/accounts-base';

export default class Link1 extends React.Component{
  onLogout(){
    Accounts.logout();
  }
  render() {
      return(
        <div>
          <p>Link1</p>
          <button onClick={this.onLogout.bind(this)}>Logout</button>
        </div>
      );
  }
};
