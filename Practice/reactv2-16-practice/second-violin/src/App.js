import React, { Component } from "react";
import "./App.css";
import { Grid, Header } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <Header as="h2" className="App-header" textAlign="center" verticalalign="middle">
          <div className="App-title">Welcome to Second Violin</div>
        </Header>
        <button className="ui button">Button</button>
      </div>
    );
  }
}

export default App;
