import React from 'react';

import {Accounts} from 'meteor/accounts-base';

export default class Logout extends React.Component{

  onLogout(){
    Accounts.logout();
  }

  render(){
    return(
      <div>
        <h1>Secure logout page!</h1>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}
