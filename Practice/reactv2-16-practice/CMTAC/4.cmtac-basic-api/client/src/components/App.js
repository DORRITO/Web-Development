import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './../images/cmtacSign.png';
import '../App.css';

class App extends Component {

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/home');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/login">Login</Link>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is the home page from the front end!</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default App;