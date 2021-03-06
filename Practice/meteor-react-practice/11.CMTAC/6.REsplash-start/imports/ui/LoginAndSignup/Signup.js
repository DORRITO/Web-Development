import React from 'react';
import {Link} from 'react-router-dom';
import {Accounts} from 'meteor/accounts-base';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import PublicHeader from './PublicHeader';

export class Signup extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      error: '',
      username: '',
      password: ''
    };
  }

  ////////////////////create user///////////////////
  onSubmit(e){
    e.preventDefault();

    let { username, password } = this.state;

    if(password.length < 3){
      return this.setState({error: 'Password must be 3 chars long'});
    }

    this.props.createUser({username, password}, (err) => {
      if(err){
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
      }
    });
  }/////////////////////////////////////////////////

  //////////////////username///////////////////////
  onUsernameChange(e) {
    this.setState({ username: e.target.value.trim() })
  }//////////////password////////////////////////
  onPasswordChange(e) {
    this.setState({ password: e.target.value.trim() })
  }////////////////////////////////////////////////

  ////////////////////////////////
  render(){
    return(
      <div>
        <PublicHeader />
        <div className="boxed-view">
          <div className="boxed_view__box">
            <h1>MCMTAC Signup</h1>
            {this.state.error ? <p>{this.state.error}</p> : undefined}
            <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form" noValidate>
              <input type="text" name="username" placeholder="username" onChange={this.onUsernameChange.bind(this)} value={this.state.username} />
              <input type="password" name="password" placeholder="password" onChange={this.onPasswordChange.bind(this)} value={this.state.password} />
              <button className="button">Register with MCMTAC</button>
            </form>
            <Link to="/"> Need to signin?</Link>
          </div>
        </div>
      </div>
    );
  }
}

/////////////////////////////////////////////////////////////////////////////////
Signup.propTypes = {
  createUser: PropTypes.func.isRequired
}
export default withTracker(() => {
  return {createUser: Accounts.createUser};
})(Signup);
