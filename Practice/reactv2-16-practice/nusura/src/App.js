import React, { Component } from 'react';
import './App.css';
// import { Image } from "react-bootstrap";

import Header from './components/Header';
import Slogan from './components/Slogan';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slogan />
      </div>
    );
  }
}

export default App;