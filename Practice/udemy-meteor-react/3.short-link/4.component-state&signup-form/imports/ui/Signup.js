import React from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component{

  //////set state/////////
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count || 0
    };
  }///////////////////////

  ////////error handler////
  onSubmit(e) {
    e.preventDefault();

    this.setState({
      error: 'something went wrong.'
    })
  }/////////////////////////

  //////button click function/////
  increment() {
    this.setState({
      count: this.state.count +1,
      error: ''
    });
  }////////////////////////////////

  //////////render component////////
  render(){
    return(
      <div>
        <h1>Join short link</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <p>{this.state.count}</p>
        <button onClick={this.increment.bind(this)}>+1</button>
        <button onClick={() => this.setState({count: this.state.count -1})}>-1</button>{/*arrow function to decrease state number!*/}

        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button>Create Account</button>
        </form>

        <Link to="/">Already have an account?</Link>
      </div>
    );
  }/////////////////////////////////
}
