import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {Accounts} from 'meteor/accounts-base';

export default class Signup extends React.Component{

  ///////////add to count////////
  increment(){
    this.setState({
      count: this.state.count + 1
    });
  }//////////////////////////////

  ////////////////on submit//////////////////////////
  onSubmit(e){
    e.preventDefault();
    let name = this.refs.name.value.trim();
    let password = this.refs.password.value.trim();

    Accounts.createUser({name, password}, (err) => {
      console.log('Signup callback', err);
    });
  }/////////////////////////////////////////////

  ////////////////html////////////////////////////////
  render() {
      return(
        <div>
          <h1>sign up</h1>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input type="text" ref="name" name="name" placeholder="enter name" />
            <input type="password" ref="password" name="password" placeholder="password" />
            <button>Create Character</button>
          </form>
          <Link to="/">Back to home page!</Link>
        </div>
      );
  }//////////////////////////////////////////////
};
