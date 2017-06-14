import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

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
          <p>
            {this.state.count}
            <button onClick={this.increment.bind(this)}>+1</button>
          </p>
          <Link to="/">Back to the beginning</Link>
        </div>
      );
  }//////////////////////////////////////////////
};
