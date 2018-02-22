import React, { Component } from 'react';
import './App.css';

import Title from './components/Header';
import Clients from './components/Clients';
import Services from './components/Services';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Title />
        <Clients />
        <Services />
      </div>
    );
  }
}

export default App;