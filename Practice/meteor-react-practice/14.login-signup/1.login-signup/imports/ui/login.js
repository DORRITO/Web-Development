import React from 'react';

import {Link} from 'react-router';
import {Meteor} from 'meteor/meteor';

export default class Login extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      error: ''
    };
  }

  ////////////////////create user///////////////////
  onSubmit(e){
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
      if(err){
        this.setState({error: "unable to login"});
      } else {
        this.setState({error: ''});
      }
    });
  }/////////////////////////////////////////////////

  ////////////////////////////////
  render(){
    return(
      <div>
        <h1>Login</h1>
        {this.state.error}
        <form onSubmit={this.onSubmit.bind(this)} noValidate>
            <input type="email" ref="email" name="email" placeholder="email" />
            <input type="password" ref="password" name="password" placeholder="password" />
            <button>Login</button>
        </form>
        <Link to="/"> Need to make an account?</Link>
      </div>
    );
  }//////////////////////////////////
};
