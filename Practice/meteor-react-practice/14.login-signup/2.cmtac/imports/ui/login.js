import React from 'react';

import {Link} from 'react-router';

export default class Login extends React.Component{

  ////////////////////////////////
  render(){
    return(
      <div>
        <h1>Login page</h1>
        <Link to="/"> Back to home</Link>
        <p><Link to="/signup"> Need to make an account?</Link></p>
      </div>
    );
  }//////////////////////////////////
}
