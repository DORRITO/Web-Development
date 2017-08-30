import React from 'react';

import {Link} from 'react-router';
import {Meteor} from 'meteor/meteor';

export default class Login extends React.Component{

  ////////////////////create user///////////////////
  onSubmit(e){
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
      console.log('login callback', err);
    });
  }/////////////////////////////////////////////////

  ////////////////////////////////
  render(){
    return(
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit.bind(this)} noValidate>
            <input type="email" ref="email" name="email" placeholder="email" />
            <input type="password" ref="password" name="password" placeholder="password" />
            <button>Login</button>
        </form>
      </div>
    );
  }//////////////////////////////////
};
