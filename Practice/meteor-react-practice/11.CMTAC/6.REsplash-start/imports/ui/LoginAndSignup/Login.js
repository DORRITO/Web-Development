import React from 'react';
import {Link} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import PublicHeader from './PublicHeader';

export class Login extends React.Component{

  /////////////////////
  constructor(props){
    super(props);
    this.state ={
      error: '',
      username: '',
      password: ''
    };
  }/////////////////////

  ////////////////////create user///////////////////
  onSubmit(e){
    e.preventDefault();

    let {username, password} = this.state;

    this.props.loginWithPassword({username}, password, (err) => {
      if(err){
        this.setState({error: "unable to login"});
      } else {
        this.setState({error: ''});
      }
    });
  }/////////////////////////////////////////////////

  ////////////sets username////////////////////////
  onusernameChange(e) {
   this.setState({ username: e.target.value.trim() })
 }////////////sets password////////////////////
 onPasswordChange(e) {
   this.setState({ password: e.target.value.trim() })
 }//////////////////////////////////////////////////

  ////////////////////////////////
  render(){
    return(
      <div>
        <PublicHeader />
        <div className="boxed-view">
          <div className="boxed_view__box">
            <h1>MCMTAC Login</h1>
            {this.state.error ? <p>{this.state.error}</p> : undefined}
            <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form" noValidate>
                <input type="text" name="username" placeholder="username" onChange={this.onusernameChange.bind(this)} value={this.state.username}/>
                <input type="password" name="password" placeholder="password" onChange={this.onPasswordChange.bind(this)} value={this.state.password}/>
                <button className="button">Enter Terraria!</button>
            </form>
            <Link to="/Signup"> Need to make character account?</Link>
          </div>
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
  return {loginWithPassword: Meteor.loginWithPassword};
})(Login);
