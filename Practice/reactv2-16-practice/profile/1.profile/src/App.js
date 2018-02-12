import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppHeader from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader className="Content"/>
      </div>
    );
  }
}

export default App;
