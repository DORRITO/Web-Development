import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component{

  //////set state/////////
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }///////////////////////

  //////take page back if no auth/////
  componentWillMount(){
    if(Meteor.userId()) {
        this.props.history.replace('/links');
      }
  }//////////////////////////////////

  ////////error handler////
  onSubmit(e) {
    e.preventDefault();
    //trim gets rid of before and after trailing spaces
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Accounts.createUser({email, password}, (err) => {
      //if else
      err ? this.setState({error: err.reason}) : this.setState({error: ''});
    });

   }/////////////////////////

  //////////render component////////
  render(){
    return(
      <div>
        <h1>Join short link</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" ref="email" name="email" placeholder="email" />
          <input type="password" ref="password" name="password" placeholder="password" />
          <button>Create Account</button>
        </form>

        <Link to="/">Already have an account?</Link>
      </div>
    );
  }/////////////////////////////////
}
