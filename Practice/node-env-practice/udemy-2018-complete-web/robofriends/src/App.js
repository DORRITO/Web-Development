import React, { Component } from "react";

import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

class App extends Component {
  constructor() {
    super()
    this.state = {
        robots,
        searchField: ''
    };
  }

  onSearchChange = (e) => {
    //   e.preventDefault();
    this.setState({ searchField: e.target.value})
  }

  render() {
    const filterRobots = this.state.robots.filter((robot) => {
        return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filterRobots} />
      </div>
    );
  }
}

export default App;