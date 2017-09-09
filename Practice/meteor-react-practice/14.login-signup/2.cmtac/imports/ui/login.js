import React from 'react';

import {Link} from 'react-router';

export default class Login extends React.Component{

  ////////////////////////////////
  onSubmit(e){
    e.preventDefault();
  }
  ///////////////////////////////
//
  ////////////////////////////////
  render(){
    return(
      <div>
        <h1>Login page</h1>
        <form onSubmit={this.onSubmit.bind(this)} noValidate>
            <input type="email" ref="email" name="email" placeholder="email" />
            <input type="password" ref="password" name="password" placeholder="password" />
            <button>Login</button>
        </form>
        <Link to="/"> Back to home</Link>
        <p><Link to="/signup"> Need to make an account?</Link></p>
      </div>
    );
  }//////////////////////////////////
}
