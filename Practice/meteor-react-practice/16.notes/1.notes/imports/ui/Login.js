import React from 'react';
import {Link} from 'react-router';
import {Meteor} from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

export class Login extends React.Component{

  /////////////////////
  constructor(props){
    super(props);
    this.state ={
      error: ''
    };
  }/////////////////////

  ////////////////////create user///////////////////
  onSubmit(e){
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    this.props.loginWithPassword({email}, password, (err) => {
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
      <div className="boxed-view">
        <div className="boxed_view__box">
          <h1>Login</h1>
          {this.state.error}
          <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form" noValidate>
              <input type="email" ref="email" name="email" placeholder="email" />
              <input type="password" ref="password" name="password" placeholder="password" />
              <button className="button">Login</button>
          </form>
          <Link to="/"> Need to make an account?</Link>
        </div>
      </div>
    );
  }//////////////////////////////////
};
/////////////////////////////////////////////////////////////////////////////////
Login.propTypes ={
  loginWithPassword: PropTypes.func.isRequired
}

export default withTracker(() => {
  return {
    loginWithPassword: Meteor.loginWithPassword
  };
})(Login);
