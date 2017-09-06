import React from 'react';

import {Link} from 'react-router';

export default class Signup extends React.Component{

  ////////////////////////////////
  onSubmit(e){
    e.preventDefault();
  }
  ///////////////////////////////

  ////////////////////////////////
  render(){
    return(
      <div>
        <h1>Signup page</h1>
        <form onSubmit={this.onSubmit.bind(this)} noValidate>
            <input type="email" ref="email" name="email" placeholder="email" />
            <input type="password" ref="password" name="password" placeholder="password" />
            <button>Login</button>
        </form>
        <p><Link to="/login">Login</Link></p>
        <Link to="/"> Need to make an account?</Link>
      </div>
    );
  }//////////////////////////////////
}
