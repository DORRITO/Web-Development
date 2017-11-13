import React from 'react';
import {Link} from 'react-router-dom';
import {Accounts} from 'meteor/accounts-base';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

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
      <div className="boxed-view">
        <div className="boxed_view__box">
          <h1>Signup page</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
                                    {/*no validate gets rid of browser validation  */}
          <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form" noValidate>
            <input type="text" name="username" placeholder="username" onChange={this.onUsernameChange.bind(this)} value={this.state.username} />
            <input type="password" name="password" placeholder="password" onChange={this.onPasswordChange.bind(this)} value={this.state.password} />
            <button className="button">Create account</button>
          </form>
          <Link to="/login"> Need to signin?</Link>
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
