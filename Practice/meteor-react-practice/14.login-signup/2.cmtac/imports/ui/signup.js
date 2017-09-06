import React from 'react';

import {Link} from 'react-router';

export default class Signup extends React.Component{

  ////////////////////////////////
  render(){
    return(
      <div>
        <h1>Signup page</h1>
        <p><Link to="/login">Login</Link></p>
        <Link to="/"> Need to make an account?</Link>
      </div>
    );
  }//////////////////////////////////
}
