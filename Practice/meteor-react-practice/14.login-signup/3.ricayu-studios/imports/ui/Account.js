import React from 'react';

import {Link} from 'react-router';

export default class MyPage extends React.Component{

  ////////////////////////////////
  render(){
    return(
      <div>
        <h1>This is the account page</h1>
        <p><Link to="/login">login</Link></p>
        <p><Link to="/signup">signup</Link></p>
      </div>
    );
  }//////////////////////////////////
}
