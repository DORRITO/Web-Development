import React, { Component } from "react";
import "./App.css";

import Header from './components/Header';
import GenreTitleList from './components/GenreTitleList';
import Songs from './components/Songs';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <GenreTitleList />
        <Songs />
        <button>submit a song</button>
        <footer><a>
          rules (make me a modal)
        </a></footer>
      </div>
    );
  }
}

export default App;
