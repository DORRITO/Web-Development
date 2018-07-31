import React, { Component } from "react";

import { Jumbotron } from "react-bootstrap";

class Slogan extends Component {
  render() {
    return (
      <Jumbotron className="Grey">
        <div>UNIQUE EXPERIENCE</div>
        <div>INNOVATIVE TECHNOLOGIES</div>
        <h1>BUILDING A BETTER, SAFER, MORE RESILIENT FUTURE</h1>
      </Jumbotron>
    );
  }
}

export default Slogan;
