import React, { Component } from 'react';
import './App.css';
import { Grid, Header } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
        <Header as='h2' className="App-header" textAlign='center' verticalAlign='middle'>
          Welcome to Second Violin
        </Header>
    );
  }
}

export default App;
