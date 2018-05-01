import React, { Component } from "react";
import "./App.css";
import { Header, Segment } from "semantic-ui-react";

import Songs from './components/Songs';
import Genre from './components/Genre';

class App extends Component {
  render() {
    return (
      <div>
        <Segment className="App-segment" raised color='teal'>
          <Header as="h2" className="App-header" textAlign="center" verticalalign="middle">
            <div className="App-title">Welcome to Second Violin</div>
          </Header>
        </Segment>
        <Songs />
        <Genre />
      </div>
    );
  }
}

export default App;
