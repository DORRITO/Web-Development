import React, { Component } from 'react';
import './App.css';
import { Header } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
        <Header as='h2' className="App-header">
          <div className="App-title">Welcome to Second Violin</div>
        </Header>
    );
  }
}

export default App;
