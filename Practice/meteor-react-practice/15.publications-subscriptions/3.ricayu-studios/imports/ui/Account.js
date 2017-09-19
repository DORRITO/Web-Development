import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Link} from 'react-router';

export default class MyPage extends React.Component{

  /////////////////////
  onLogout(){
    Accounts.logout();
  }////////////////////

  ////////////////////////////////
  render(){
    return(
      <div>
        <h1>This is the account page</h1>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
        <p><Link to="/login">login</Link></p>
        <p><Link to="/signup">signup</Link></p>
      </div>
    );
  }//////////////////////////////////
}
