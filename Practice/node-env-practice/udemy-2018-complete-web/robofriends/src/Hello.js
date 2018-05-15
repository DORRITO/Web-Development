import React, { Component } from "react";
import './Hello.css';

class Hello extends Component {
  render() {
    return (
      <div className='f1 tc'>
        <h1>Hello World</h1>
        <h2>Welcome to a react file</h2>
        {this.props.greeting}
      </div>
    );
  }
}

export default Hello;
