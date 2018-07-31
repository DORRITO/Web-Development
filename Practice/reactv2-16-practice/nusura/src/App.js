import React, { Component } from 'react';
import './App.css';
import { Image } from "react-bootstrap";

import Header from './components/Header';
import Slogan from './components/Slogan';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Image
          className="Background1"
          src="https://nusura.staging.wpengine.com/wp-content/uploads/2018/07/page-home-1.jpg"
          responsive
        />
        <Slogan />
      </div>
    );
  }
}

export default App;