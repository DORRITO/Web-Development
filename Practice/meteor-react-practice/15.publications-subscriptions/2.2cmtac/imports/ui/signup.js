import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Link} from 'react-router';

export default class Signup extends React.Component{
  ////////////////////
  constructor(props){
    super(props);
    this.state ={
      error: ''
    };
  }////////////////////

  //////////////////////////////////////////
  onSubmit(e){
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if(password.length < 3){
      return this.setState({error: 'Password must be 3 chars long'});
    }

    Accounts.createUser({email,password}, (err) => {
      if(err){
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
      }
    });
  }////////////////////////////////////////////////////

  ////////////////////////////////////////////////////
  render(){
    return(
      <div>
        <h1>Signup page</h1>
        {this.state.error}
        <form onSubmit={this.onSubmit.bind(this)} noValidate>
            <input type="email" ref="email" name="email" placeholder="email" />
            <input type="password" ref="password" name="password" placeholder="password" />
            <button>Signup</button>
        </form>
        <p><Link to="/login">Login</Link></p>
      </div>
    );
  }//////////////////////////////////////////////////
}
