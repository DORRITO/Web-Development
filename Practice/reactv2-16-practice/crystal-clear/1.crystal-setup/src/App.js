import React, { Component } from 'react';
import './App.css';

import Title from './components/Header';
import Clients from './components/Clients';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Title />
        <Clients name="clients"/>
      </div>
    );
  }
}

export default App;