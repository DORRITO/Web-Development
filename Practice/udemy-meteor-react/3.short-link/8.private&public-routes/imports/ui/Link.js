import React from 'react';
import {Accounts} from 'meteor/accounts-base';

export default class Link extends React.Component{

  //////take page back if no auth/////
  componentWillMount(){
    if(!Meteor.userId()) {
        this.props.history.replace('/');
      }
  }//////////////////////////////////

  onLogout() {
    Accounts.logout();
  }

  render(){
    return(
      <div>
        <h1>Your links</h1>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}
