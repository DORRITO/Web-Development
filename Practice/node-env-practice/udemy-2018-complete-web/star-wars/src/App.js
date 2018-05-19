import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ship: ""
    };
  }

  componentDidMount() {
    this.starWars(32);
  }

  starWars = async shipNum => {
    try {
      const res = await fetch(`https://swapi.co/api/starships/${shipNum}`);
      const ship = await res.json();
      this.setState({ ship: ship.name });
    } catch(e) {
      console.log("this isn't working", e);
    }
  };

  render() {
    return (
      <div>
        <h1>Star Wars Ships</h1>
        <h2>{this.state.ship}</h2>
      </div>
    );
  }
}

export default App;
