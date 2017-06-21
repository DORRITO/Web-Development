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
            <input type="text" name="name" placeholder="enter name" />
            <input type="password" name="password" placeholder="password" />
          </form>
          <Link to="/">Back to home page!</Link>
        </div>
      );
  }//////////////////////////////////////////////
};
