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
      
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <GenreTitleList />
        <Songs />
        <button>submit a song</button>
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
