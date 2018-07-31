import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={'https://nusura.com/wp-content/uploads/2018/06/n_rev_small3.png'} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Nusura</h1>
        </header>
        <Header></Header>
        <p className="App-intro">
          Start here
        </p>
      </div>
    );
  }
}

export default App;