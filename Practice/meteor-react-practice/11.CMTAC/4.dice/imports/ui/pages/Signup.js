import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {Meteor} from 'meteor/accounts-base';

export default class Signup extends React.Component{
  /////////////////////
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }///////////////////
//
  ////////////////on submit//////////////////////////
  onSubmit(e){
    e.preventDefault();
    let username = this.refs.name.value.trim();
    let password = this.refs.password.value.trim();
    
    //error for signup
    Accounts.createUser({username, password}, (err) => {
      err ? this.setState({error: err.reason}) : this.setState({error: ''});
    });
  }/////////////////////////////////////////////

  ////////////////html////////////////////////////////
  render() {
      return(
        <div>
          <h1>sign up</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form onSubmit={this.onSubmit.bind(this)}>
            <input type="text" ref="name" name="name" placeholder="enter name" />
            <input type="password" ref="password" name="password" placeholder="password" />
            <button>Create Character</button>
          </form>

          <p><Link to="/login">Oops, I already have a login</Link></p>
          <Link to="/">Back to the home page!</Link>
        </div>
      );
  }//////////////////////////////////////////////
};
