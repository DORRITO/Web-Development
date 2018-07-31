import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <img className="Background1" src="https://nusura.staging.wpengine.com/wp-content/uploads/2018/07/page-home-1.jpg"></img>
      </div>
    );
  }
}

export default App;