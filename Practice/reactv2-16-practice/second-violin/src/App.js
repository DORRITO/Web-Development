import React, { Component } from "react";
import "./App.css";

import Header from './components/Header';
import GenreTitleList from './components/GenreTitleList';
import Songs from './components/Songs';
import GenreExp from './components/GenreExp';


class App extends Component {
  constructor(){
    super()
    this.state = {
      main: true,
      blues: false,
      country: false,
      pop: false,
      rap: false,
      rock: false,
      login: false,
      signup: false
    }
  }

  songSubmit = () => {
    alert('submitted song')
  }

  render() {
    return (
      <div>
        <Header/>
        <GenreTitleList />
        <Songs />
        <button onClick={this.songSubmit}>submit a song</button>
        <GenreExp />
        <footer>
          Frisbee Productions 
          <a>
            rules (make me a modal)
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
