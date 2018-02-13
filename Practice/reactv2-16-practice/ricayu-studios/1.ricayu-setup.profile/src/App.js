import React, { Component } from 'react';
import './App.css';

import AppHeader from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Home />
      </div>
    );
  }
}

export default App;
