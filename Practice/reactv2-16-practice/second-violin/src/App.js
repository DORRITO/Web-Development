import React, { Component } from "react";
import "./App.css";
import { Header, Segment } from "semantic-ui-react";

import Songs from './components/Songs';
import GenreList from './components/GenreList';

class App extends Component {
  render() {
    return (
      <div>
        <Segment className="App-segment" raised color='teal'>
          <Header as="h2" className="App-header" textAlign="center" verticalalign="middle">
            <div className="App-title">Welcome to Second Violin</div>
          </Header>
        </Segment>
        <GenreList />
        <Songs />
      </div>
    );
  }
}

export default App;
