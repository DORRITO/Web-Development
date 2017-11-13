import React from 'react';
import {Link} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

export class Login extends React.Component{

  /////////////////////
  constructor(props){
    super(props);
    this.state ={
      error: '',
      email: '',
      password: ''
    };
  }/////////////////////

  ////////////////////create user///////////////////
  onSubmit(e){
    e.preventDefault();

    let {email, password} = this.state;

    this.props.loginWithPassword({email}, password, (err) => {
      if(err){
        this.setState({error: "unable to login"});
      } else {
        this.setState({error: ''});
      }
    });
  }/////////////////////////////////////////////////

  ////////////sets email////////////////////////
  onEmailChange(e) {
   this.setState({ email: e.target.value.trim() })
 }////////////sets password////////////////////
 onPasswordChange(e) {
   this.setState({ password: e.target.value.trim() })
 }//////////////////////////////////////////////////

  ////////////////////////////////
  render(){
    return(
      <div className="boxed-view">
        <div className="boxed_view__box">
          <h1>Login</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form" noValidate>
              <input type="email" name="email" placeholder="email" onChange={this.onEmailChange.bind(this)} value={this.state.email}/>
              <input type="password" name="password" placeholder="password" onChange={this.onPasswordChange.bind(this)} value={this.state.password}/>
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
