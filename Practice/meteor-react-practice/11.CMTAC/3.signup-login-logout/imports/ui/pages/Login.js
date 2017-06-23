import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {Meteor} from 'meteor/meteor';

export default class Login extends React.Component{
  ///////////////////////////
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }/////////////////////////

  ////////////////on submit//////////////////////////
  onSubmit(e){
    e.preventDefault();
    let username = this.refs.name.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({username}, password, (err) => {
      console.log('login callback', err)
    });
  }/////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////
  render() {
    return(
      <div>
        <h1>Login</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="name" name="name" placeholder="enter name" />
          <input type="password" ref="password" name="password" placeholder="password" />
          <button>Login</button>
        </form>

        <Link to='/signup'>Need to setup a name and password?</Link>
        <p><Link to="/">Back to the home page!</Link></p>
      </div>
    );
  }///////////////////////////////////////////////////////////////////////////
};
