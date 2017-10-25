import React from 'react';
import {Link} from 'react-router';
import {Accounts} from 'meteor/accounts-base';

export default class Signup extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      error: ''
    };
  }

  ////////////////////create user///////////////////
  onSubmit(e){
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if(password.length < 3){
      return this.setState({error: 'Password must be 3 chars long'});
    }

    Accounts.createUser({email, password}, (err) => {
      if(err){
        this.setState({error: err.reason});
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
          <h1>Signup page</h1>
          {this.state.error}
                                    {/*no validate gets rid of browser validation  */}
          <form onSubmit={this.onSubmit.bind(this)} className="boxed-view-form" noValidate>
              <input type="email" ref="email" name="email" placeholder="email" />
              <input type="password" ref="password" name="password" placeholder="password" />
              <button>Create account</button>
          </form>
          <Link to="/login"> Need to signin?</Link>
        </div>
      </div>
    );
  }//////////////////////////////////
};
