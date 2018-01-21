import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './../images/cmtacSign.png';
import '../App.css';

class Login extends Component {

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/login');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div><Link to="/">Home</Link>&nbsp;
          <Link to="/signup">Signup</Link></div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Signup page</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default Login;
console.log('this is happening')