import React from 'react';
import {Link} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';

export default class Login extends React.Component{

  //////set state/////////
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count || 0
    };
  }///////////////////////

  ////////error handler////
  onSubmit(e) {
    e.preventDefault();
    //trim gets rid of before and after trailing spaces
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
      console.log('Login callback', err);
    });
   }/////////////////////////

  ////////////render//////////////////
  render(){
    return(
      <div>
        <h1>short link</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" ref="email" name="email" placeholder="email" />
          <input type="password" ref="password" name="password" placeholder="password" />
          <button>Login</button>
        </form>

        <Link to="/signup"> Have an account?</Link>
      </div>
    );
  }////////////////////////////////////
}
