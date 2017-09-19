import React from 'react';

import {Link} from 'react-router';

export default class Main extends React.Component{

  ////////////////////////////////
  render(){
    return(
      <div>
        <h1>This is the main page</h1>
        <Link to="/login">Login</Link>
        <p><Link to="/signup"> Need to make an account?</Link></p>
      </div>
    );
  }//////////////////////////////////
}
