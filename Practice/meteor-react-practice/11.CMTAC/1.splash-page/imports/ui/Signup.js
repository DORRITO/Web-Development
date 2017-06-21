import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {Accounts} from 'meteor/accounts-base';

export default class Signup extends React.Component{

  /////////props///////////
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }///////////////////////

  ///////////add to count////////
  increment(){
    this.setState({
      count: this.state.count + 1
    });
  }//////////////////////////////

  onSubmit(e){
    e.preventDefault();

    let name = this.refs.name.vaule.trim();
    let password = this.refs.password.trim();

    Accounts.createUser({name, password}, (err) => {

    });
  }

  ////////////////html////////////////////////////////
  render() {
      return(
        <div>
          <h1>sign up</h1>
          {/* <p>
            {this.state.count}
            <button onClick={this.increment.bind(this)}>+1</button>
            <button onClick={() => {this.setState({count: this.state.count - 1})}}>-1</button>
          </p> */}
          <form>
            <input type="text" ref="name" name="name" placeholder="enter name" />
            <input type="password" ref="password" name="password" placeholder="password" />
            <button>Create Character</button>
          </form>
          <Link to="/">Back to home page!</Link>
        </div>
      );
  }//////////////////////////////////////////////
};
